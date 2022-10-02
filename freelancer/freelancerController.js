const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


const getOneFreelancerByEmail = async(req,reply)=>{
    try{

        // extracting  the email from request params
        const {email} = req.params


        // getting target freelancer from DB
        const targetFreelancer =  await prisma.user.findUnique({
            where:{
             email
            },
            select:{
                email:true,      
                firstName :true,      
                lastName:true,      
                nationality :true,      
                avatar :true,      
                currentLocation:true,      
                createdAt :true,      
                isVerified :true,      
                verifiedDate:true,       
                languageList:true,
                freelancer:{
                    select:{
                        hourlyPrice:true,
                        weeklyWantingHour:true,
                        aboutMe :true,
                        shortIntro:true,
                        educationList:true,
                        certificationList:true,
                        products :true,
                        educationList:true,
                        certificationList:true,
                        employmentList:true,
                        products:true,

                    }
                }
            }
        }) 

        reply.send(targetFreelancer)  

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const updateFreelancerInfo = async(req,reply)=>{
    try{
        // extracting data from params and request body
        const {id} = req.params
        const {firstName,lastName,nationality,avatar,currentLocation,hourlyPrice,weeklyWantingHour,aboutMe,shortIntro} = req.body

        const targetUser = await prisma.user.update({
            where:{
             id
            },
            data:{
                firstName,
                lastName,
                nationality,
                avatar,
                currentLocation,
                freelancer:{
                    update:{
                       hourlyPrice,
                       weeklyWantingHour, 
                       aboutMe,
                       shortIntro
                    }
                }
            }
        })

        reply.send(targetUser)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

module.exports = {
    getOneFreelancerByEmail,
    updateFreelancerInfo,
}