const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const {hiringRequestRange} = require('../util/paginationRange')
const {verify} = require('jsonwebtoken')


const createOneRequest = async(req,reply)=>{
    try{     
        const {ownerId,freelancerId,jobId,ownerNote,salary} = req.body      

        const newRequest = await prisma.hiringRequest.create({
            data:{
                owner:{
                    connect:{
                        userId:ownerId
                    }
                },
                freelancer:{
                    connect:{
                        userId:freelancerId
                    }
                },
                job:{
                    connect:{
                        id:jobId
                    }
                },
                salary,
                ownerNote,
                isEmployerAccepet:true,
                isFreelancerAccept:false,
            },
        })

        reply.send(newRequest)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const updateOneRequest = async(req,reply)=>{
    try{   
        const {id} = req.params  
        const {ownerNote,isEmployerAccepet,salary} = req.body      

        const targetRequest = await prisma.hiringRequest.update({
            where:{
                id
            },
            data:{
                ownerNote,
                isEmployerAccepet, 
                salary        
            },
            include:{
                job:{
                    select:{
                        title:true,
                    }
                },
                freelancer:{
                    select:{
                        user:{
                            select:{
                                firstName:true,
                                lastName:true
                            }
                        }
                    }
                }
            }
        })

        reply.send(targetRequest)      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const deleteOneRequest = async(req,reply)=>{
    try{
        const {id} = req.params

        const targetRequest = await prisma.hiringRequest.delete({
            where:{
                id
            },
        })

        reply.send(targetRequest)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const freelancerAcceptingRequest = async(req,reply)=>{
    try{
        const {id} = req.params
        const {isFreelancerAccept,freelancerNote} = req.body
        const freelancerId = verify(req.headers.token,process.env.JWT_SECRET).id
        let data = {
            isFreelancerAccept,
            freelancerNote,
        }

        if(isFreelancerAccept){
            data.product = {
                create:{
                    creator:{
                        connect:{
                            userId:freelancerId
                        }
                    },
                    content:''
                }
            }
        }

        const targetRequest = await prisma.hiringRequest.update({
            where:{
                id
            },
            data,
            include:{
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
                job:{
                    select:{
                        title:true
                    }
                }
            },
        })
        reply.send(targetRequest)
    }catch(err){
        console.log(err)
        reply.send(err)
    }

}

const getOneFreelancerAllHiringRequest = async(req,reply)=>{
    try{
        const {id} = req.params

        let pageNo = 0
        let toSkip = false
        if(req.params.pageNumber){
          pageNo = req.params.pageNumber
          toSkip = true
        }
    
        await prisma.hiringRequest.count({
            where:{
                freelancer:{
                    userId:id
                }
            }
        }).then(async(length)=>{
            const data = await prisma.hiringRequest.findMany({
                where:{
                    freelancer:{
                        userId:id
                    }
                },
                take:hiringRequestRange,
                skip:toSkip ? (pageNo-1)*hiringRequestRange:0, 
                orderBy:{
                    createdAt:'desc'
                },
                include:{
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
                    job:{
                        select:{
                            title:true
                        }
                    }
                },
            })   


            reply.send({data,pageNumber:Math.ceil(length/hiringRequestRange)}) 
        })
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const getOneEmployerAllHiringRequest = async(req,reply)=>{
    try{
        const {id} = req.params

        let pageNo = 0
        let toSkip = false
        if(req.params.pageNumber){
          pageNo = req.params.pageNumber
          toSkip = true
        }
    
        await prisma.hiringRequest.count({
            where:{
                owner:{
                    userId:id
                }
            }
        }).then(async(length)=>{
            const data = await prisma.hiringRequest.findMany({
                where:{
                    owner:{
                        userId:id
                    }
                },
                take:hiringRequestRange,
                skip:toSkip ? (pageNo-1)*hiringRequestRange:0, 
                orderBy:{
                    createdAt:'desc'
                },
                include:{
                    job:{
                        select:{
                            title:true,
                        }
                    },
                    freelancer:{
                        select:{
                            user:{
                                select:{
                                    firstName:true,
                                    lastName:true
                                }
                            }
                        }
                    }
                }
            })   
            reply.send({data,pageNumber:Math.ceil(length/hiringRequestRange)}) 
        })
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const getOneJobAllHiringRequest = async(req,reply)=>{
    try{
        const {id} = req.params

        let pageNo = 0
        let toSkip = false
        if(req.params.pageNumber){
          pageNo = req.params.pageNumber
          toSkip = true
        }
    
        await prisma.hiringRequest.count({
            where:{
                jobId:id
            }
        }).then(async(length)=>{
            const data = await prisma.hiringRequest.findMany({
                where:{
                    jobId:id
                },
                take:hiringRequestRange,
                skip:toSkip ? (pageNo-1)*hiringRequestRange:0, 
                orderBy:{
                    createdAt:'desc'
                }
            })   
            reply.send({data,pageNumber:Math.ceil(length/hiringRequestRange)}) 
        })
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

module.exports = {
    createOneRequest,
    updateOneRequest,
    deleteOneRequest,
    freelancerAcceptingRequest,
    getOneFreelancerAllHiringRequest,
    getOneEmployerAllHiringRequest,
    getOneJobAllHiringRequest,
}