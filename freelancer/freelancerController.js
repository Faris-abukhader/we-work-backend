const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const {freelancerRange} = require('../util/paginationRange')


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
                id:true,
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


const getOneFreelancerById = async(req,reply)=>{
    try{

        // extracting  the email from request params
        const id = Number(req.params.id)


        // getting target freelancer from DB
        let targetFreelancer =  await prisma.user.findUnique({
            where:{
             id
            },
            select:{
                id:true,
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

        const products = await prisma.product.findMany({
            where:{
                creator:{
                    userId:id
                },
                
            },
            select:{
                hiringRequest:{
                    select:{
                        job:{
                            select:{
                                id:true,
                                title:true
                            }
                        }
                        ,
                        owner:{
                            select:{
                                user:{
                                    select:{
                                        firstName:true,
                                        lastName:true
                                    }
                                }
                            }
                        },
                        product:{
                            select:{
                                employerRate:true
                            }
                        }
                    }
                }
            }
        })

        targetFreelancer.freelancer.products = products

        console.log(targetFreelancer)
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

const getAllFreelancer = async(req,reply)=>{
    try{
        const {id} = req.params
        let pageNo = 0
        let toSkip = false
        if(req.params.pageNumber){
          pageNo = req.params.pageNumber
          toSkip = true
        }



        await prisma.freelancer.count({
            where:{
                user:{
                    isVerified:true
                }
            }
        }).then(async(length)=>{
            const data = await prisma.freelancer.findMany({
                where:{
                    user:{
                        isVerified:true
                    }
                },
                take:freelancerRange,
                skip:toSkip ? (pageNo-1)*freelancerRange:0, 
                select:{
                   user:{
                    select:{
                        id:true,
                        firstName:true,
                        lastName:true,
                    }
                   }
                }
            })   
            console.log({pageNumber:Math.ceil(length/freelancerRange)})
            reply.send({data,pageNumber:Math.ceil(length/freelancerRange)}) 
        })


    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const freelancerStatics = async(req,reply)=>{
    try{
        const {id} = req.params

        const data = await prisma.freelancer.findUnique({
            where:{
                userId:id
            },
            select:{
                _count:{
                    select:{
                        proposalList:true,
                        hiringRequest:true,
                        products:true
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

const setWeeklyWantingHour = async(req,reply)=>{
    try{
        const {id} = req.params
        const {weeklyWantingHour} = req.body

        const targetUser = await prisma.freelancer.update({
            where:{
                userId:id
            },
            data:{
                weeklyWantingHour,
            },
            select:{
                weeklyWantingHour:true
            }
        })

        reply.send(targetUser)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const updateFreelancerAboutMe = async(req,reply)=>{
    try{
        const {id} = req.params
        const {aboutMe} = req.body

        const targetUser = await prisma.freelancer.update({
            where:{
                userId:id
            },
            data:{
                aboutMe,
            },
            select:{
                aboutMe:true
            }
        })

        reply.send(targetUser)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const updateFreelancerAvatar = async(req,reply)=>{
    try{
        const {id} = req.params
        const {avatar} = req.body

        const targetUser = await prisma.user.update({
            where:{
                id
            },
            data:{
                avatar
            },
            select:{
                avatar:true
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
    getOneFreelancerById,
    updateFreelancerInfo,
    getAllFreelancer,
    freelancerStatics,
    setWeeklyWantingHour,
    updateFreelancerAboutMe,
    updateFreelancerAvatar
}