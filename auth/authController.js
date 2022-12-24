const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10
// const {sendEmail} = require('../util/emailConfig/sendInBlue')
const {getTargetScript} = require('../util/emailConfig/script')


const signUp = async(req,reply)=>{
    try{

        // extracting  the data from request body
        const {email,password,firstName,lastName,accountType} = req.body

        // calling hash function to hash the password before save it into DB
        const hash = bcrypt.hashSync(password, saltRounds);


        // building the data need for creating user user whether was freelancer or employer
        let isFreelancer = accountType=='f'
        let credit = Math.floor(Math.random() * 1000) + 200
        let data = {
            email,
            password:hash,
            accountType,
            firstName,
            lastName,
            token:'',
            isVerified:true,
            verifiedDate:new Date()
        }
        let include = {}

        if(isFreelancer){
           data.freelancer = {
            create:{}
           }
           include = {
            freelancer:true
           }
        }else{
            data.employer = {
                create:{}
            }
            include = {
                employer:true
            }    
        }

        // creating new user in DB
        let newUser =  await prisma.user.create({
            data,
            include
        }) 


        // getting back the account id after it generate in DB
        let targetId = ''
        if(isFreelancer){
            targetId = newUser.freelancer.id
        }else{
            targetId = newUser.employer.id
        }


        // sign one token and pass newUserId to it as data
        let token = jwt.sign({id:targetId},process.env.JWT_SECRET)


        if(isFreelancer){
            include = {
             freelancer:true
            }
         }else{
             include = {
                 employer:true
             }    
         }


        // updating new user and save the token to it
        let user = await prisma.user.update({
            where:{
                id:newUser.id
            },
            data:{
            token
            },
            include
        })


        // getting back the account id after it generate in DB
        targetId = newUser.id


        // sign one token and pass newUserId to it as data
        token = jwt.sign({id:targetId},process.env.JWT_SECRET)

        // updating new user and save the token to it
        user = await prisma.user.update({
            where:{
                id:newUser.id
            },
            data:{
            token
            },
            include
        })
        
        // sending email to user to verify his account
        // sendEmail([{email}],getTargetScript('verify').emailTitle,'verify',process.env.API_URL,token,`${firstName + ' ' + lastName}`)
        
        reply.send(user)  

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const resendVerifyingEmail = async(req,reply)=>{
    try{
        const {email} = req.params

        // checking if the email registered in DB
        const targetUser = await prisma.user.findUnique({
            where:{
                email
            }
        })

        // sign one token and pass newUserId to it as data
        const token = jwt.sign({id:targetUser.id},process.env.JWT_SECRET)


        // sending verifying emial to target email
        // sendEmail([{email}],getTargetScript('verify').emailTitle,'verify',process.env.API_URL,token,`${targetUser.firstName + ' ' + targetUser.lastName}`)

        reply.send({message:'resendEmailVerifySendSuccessfully'})


    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const signIn = async(req,reply)=>{
      try{
        // extracting  the data from request body
        const {email,password} = req.body

        console.log(email,password)

        // checking if the email is exist or not 
        const targetUser = await prisma.user.findUnique({
            where:{
                email,
            },
            include:{
                freelancer:true,
                employer:true
            }
        })

        if(!targetUser) throw Error('No user found')

        // extract one one accout
        let tempUser = targetUser
        if(tempUser.accountType=='f'){
            delete tempUser.employer
        }else{
            delete tempUser.freelancer
        }

        console.log(targetUser)

        // if the user isn't verify throw error
        if(!targetUser.isVerified)throw new Error(`user isn't verified`)

        // compare the found user's password with request password
        const isPasswordCorrect = bcrypt.compareSync(password, targetUser.password);

        console.log(isPasswordCorrect)

        // if password isn't correct
        if(!isPasswordCorrect) throw new Error(`Password isn't correct`)

        // return the user 
        reply.send(tempUser)
    
      }catch(err){
        console.log(err)
        reply.send(err) 
      }

}


const verify = async(req,reply)=>{

    try{
        // extract the token  from url query string
        const {token} = req.query

        // checking the token
        const targetId = jwt.verify(token,process.env.JWT_SECRET).id


        // updating the user and make it verified
        await prisma.user.update({
            where:{
                id:targetId
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

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const sendRequestForNewPassword = async(req,reply)=>{
    try{
        const {email} = req.body

        // check if the target email is exist
        const targetUser = await prisma.user.findUnique({
            where:{
                email
            },
        })

        let id = Math.floor(Math.random() * 10000)+99

        // generate the token , expired after 1h
        const token = jwt.sign({userId:targetUser.id,tokenId:id},process.env.JWT_SECRET,{expiresIn: '1h'})


        if (targetUser.changePasswordRequest) throw new Error('user already reach the limit to reset password')


        // creating reset password request (where each user has only one chance to reset his/her password)
        newResetPasswordRequest = await prisma.changePasswordRequest.create({
            data:{
                id,
                owner:{
                    connect:{
                        id:targetUser.id
                    }
                },
                token
            }
        })

        // sending reset page to target email
        // sendEmail([{email}],getTargetScript('resetPassword').emailTitle,'resetPassword',process.env.API_URL,token,`${targetUser.firstName + ' ' + targetUser.lastName}`)

        // if there is not error we return success statement to user
        reply.send({message:'EmailSendSuccessfully'})

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const resetPassword = async(req,reply)=>{
    try{
        const {token} = req.params
        const {password} = req.body
        const userId = jwt.verify(token,process.env.JWT_SECRET).userId
        const tokenId = jwt.verify(token,process.env.JWT_SECRET).tokenId

        // hashing the password
        const hash = bcrypt.hashSync(password, saltRounds);

        // updating the user's password
        const targetUser = await prisma.user.update({
            where:{
                id:userId
            },
            data:{
                password:hash
            },
        })

        reply.send(targetUser)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


module.exports = {
    signUp,
    signIn,
    verify,
    sendRequestForNewPassword,
    resetPassword,
    resendVerifyingEmail,
}