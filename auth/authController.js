const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const {userRange} = require('../util/paginationRange')



const signUp = async(req,reply)=>{
    try{
        // extracting  the data from request body
        const {email,password,firstName,middleName,lastName,language} = req.body

        // calling hash function to hash the password before save it into DB
        const hash = bcrypt.hashSync(password, saltRounds);

        // sign one token and pass email as data in it
        const token = jwt.sign({email},process.env.JWT_SECRET)

        // creating new user in DB
        const newUser =  await prisma.user.create({
            data:{
                email,
                password:hash,
                role:'client',
                client:{
                    create:{
                        firstName:firstName,
                        middleName:middleName??" ",
                        lastName:lastName,    
                        isVerified:false,
                        token,
                        language
                    }
                }
            },include:{
                client:true
            }
        }) 

        // sending email to user to verify his account
        sendEmail([{email}],getTargetLanguageScript(language,'verify').emailProject,'verify',language,process.env.API_URL,token,`${firstName + ' ' + lastName}`)
        
        reply.send(newUser)  

    }catch(err){
        console.log(err)
        createNewLog({content:err,topic:'auth/signUp',issuer:'website'})
    }

    reply.code(500).send({message:"somethingWentWrong"}) 
}


const signIn = async(req,reply)=>{
    var errorMessage = ''
      try{
        
        // extracting  the data from request body
        const {email,password} = req.body

        // checking if the email is exist or not 
        const targetUser = await prisma.user.findUnique({
            where:{
                email,
            },
            include:{
                client:true
            }
        })

        console.log(targetUser)

        // if the user isn't verify throw error
        if(!targetUser.client.isVerified)throw new Error(`user isn't verified`)

        // compare the found user's password with request password
        const isPasswordCorrect = bcrypt.compareSync(password, targetUser.password);

        console.log(isPasswordCorrect)

        // if password isn't correct
        if(!isPasswordCorrect) throw new Error(`Password isn't correct`)

        // return the user 
        reply.send(targetUser)
    
      }catch(err){
        console.log('***********************')
        console.log(err.message)
        console.log('***********************')
        // user isn't found
        if(String(err.message).length > 40){
            errorMessage = 'userIsnotFound'
        }else{
            errorMessage = String(err.message)
        }
        createNewLog({content:err,topic:'auth/signIn',issuer:'website'})
      }
      reply.code(500).send({message:errorMessage}) 

}



const staffSignIn = async(req,reply)=>{
    var errorMessage = ''
      try{
        
        // extracting  the data from request body
        const {email,password} = req.body

        // checking if the email is exist or not 
        const targetUser = await prisma.user.findUnique({
            where:{
                email,
            },
            include:{
                staff:true,
                admin:true
            }
        })

        console.log(targetUser)

        // deny any inactive account for staff
        if(targetUser.role=='staff'){
            if(!targetStaff.staff.verified) throw new Error(`inactive user`)
        }

        // client user can't login here . . .
        if(targetUser.role=='client') throw new Error(`Unauthorized user`)


        // compare the found user's password with request password
        const isPasswordCorrect = bcrypt.compareSync(password, targetUser.password);


        // if password isn't correct
        if(!isPasswordCorrect) throw new Error(`Password isn't correct`)

        // assign the target (staff or admin) object to user before we return it
        let targetStaff = targetUser
        if(targetStaff.role=='admin'){
            delete targetStaff.client
        }else{
            delete targetStaff.admin
        }
        console.log("request no error")
        console.log(targetStaff)
        // return the user 
        reply.send(targetStaff)
    
      }catch(err){
        console.log('***********************')
        console.log(err.message)
        console.log('***********************')
        // user isn't found
        if(String(err.message).length > 40){
            errorMessage = 'userIsnotFound'
        }else{
            errorMessage = String(err.message)
        }
        createNewLog({content:err,topic:'auth/staff/signIn',issuer:'website'})
        .then(()=>{
            reply.code(500).send({message:errorMessage}) 
        })
      }
}


const verify = (req,reply)=>{

    try{
        // extract the token  from url query string
        const {token} = req.query

        // checking the token
        jwt.verify(token,process.env.JWT_SECRET,async(error,decoded)=>{

            if(error) reply.send(error)

            // decoded the email from the token
            let email = decoded.email

            // updating the user and make it verified
            await prisma.user.update({
                where:{
                    email
                },
                data:{
                    isVerified:true,
                    verifiedDate: new Date()  
                }
            })

            // return html page for redirect to target frontend auth page 
          reply.type('text/html').send(`
          <div style="width:100%;height:100vh; display:flex; align-items: center;justify-content:center">
          email verify sucessfully , redirecting the page ...
          </div>
          <script>
          setTimeout(function(){
            window.location.href = '${process.env.FRONTEND_URL}/auth/signIn'
        }, 2000); 
        </script>`)

        })

    }catch(err){
        createNewLog({content:err,topic:'auth/verify',issuer:'website'})
    }
    reply.code(500).send({message:"somethingWentWrong"}) 

}

const sendRequestForNewPassword = async(req,reply)=>{
    try{
        const {expDate,email} = req.body

        // check if the target email is exist
        const targetUser = await prisma.user.findUnique({
            where:{
                email
            },
            include:{
                client:true
            }
        })

        let id = Math.floor(Math.random() * 10000)+99 + Number.parseInt( new Date().getTime())


        // generate the token 
        const token = jwt.sign({
            exp:Math.floor( new Date.now(expDate) / 1000) + (60 * 60),
            data:{email,id}
        },process.env.JWT_SECRET)


        newResetPasswordRequest = await prisma.changePasswordRequest.create({
            data:{
                id,
                token
            }
        })


        sendEmail({email},getTargetLanguageScript(targetUser.language??'en','resetPassword').emailTitle,'resetPassword',targetUser.language,process.env.API_URL,token,`${targetUser.firstName + ' ' + targetUser.lastName}`)

        reply.send({message:'EmailSendSuccessfully'})



    }catch(err){
        console.log(err)
        createNewLog({content:err,topic:'auth/sendRequestForNewPassword',issuer:'website'})
    }
    reply.code(500).send({message:"somethingWentWrong"}) 
}

const resetPassword = async(req,reply)=>{
    try{
        const {token} = req.params
        const {password} = req.body
        const targetEmail = jwt.verify(token,process.env.JWT_SECRET).email
        const tokenId = jwt.verify(token,process.env.JWT_SECRET).id


        // delete the token (one request one token one shoot)
        await prisma.changePasswordRequest.delete({
            where:{
              id:tokenId
            }
        })

        // hashing the password
        const hash = bcrypt.hashSync(password, saltRounds);

        // updating the user's password
        const targetUser = await prisma.user.update({
            where:{
                email:targetEmail
            },
            data:{
                password:hash
            },
            include:{
                client:true
            }
        })

        reply.send(targetUser)

    }catch(err){
        console.log(err)
        createNewLog({content:err,topic:'auth/resetPassword',issuer:'website'})
    }
    reply.code(500).send({message:"somethingWentWrong"}) 
}


module.exports = {
    signUp,
    staffSignIn,
    signIn,
    verify,
    sendRequestForNewPassword,
    resetPassword,
}