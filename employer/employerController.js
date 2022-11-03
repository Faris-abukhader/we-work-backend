const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


const getOneEmployerByEmail = async(req,reply)=>{
    try{

        // extracting  the email from request params
        const {email} = req.params


        // getting target employer from DB
        const targetEmployer =  await prisma.user.findUnique({
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
                employer:{
                    select:{
                        jobList:true
                    }
                }
            }
        }) 

        reply.send(targetEmployer)  

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const getOneEmployerById = async(req,reply)=>{
    try{

        // extracting  the email from request params
        const {id} = req.params


        // getting target employer from DB
        const targetEmployer =  await prisma.user.findUnique({
            where:{
             id
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
                employer:{
                    select:{
                        jobList:true,
                        hiringRequest:true
                    }
                }
            }
        }) 

        reply.send(targetEmployer)  

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const updateEmployerInfo = async(req,reply)=>{
    try{
        // extracting data from params and request body
        const {id} = req.params
        const {firstName,lastName,nationality,avatar,currentLocation} = req.body

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
            }
        })

        reply.send(targetUser)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const emplyerStatics = async(req,reply)=>{
    try{
        const {id} = req.params

        const data = await prisma.employer.findUnique({
            where:{
                userId:id
            },
            select:{
                _count:{
                    select:{
                        jobList:true,
                        hiringRequest:true
                    }
                }
            }
        })

        reply.send(data)

    }catch(err){
     console.log(err)
     reply.send(err)
    }
}

module.exports = {
    getOneEmployerByEmail,
    getOneEmployerById,
    updateEmployerInfo,
    emplyerStatics
}