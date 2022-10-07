const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const {hiringRequestRange} = require('../util/paginationRange')


const createOneRequest = async(req,reply)=>{
    try{     
        const {ownerId,freelancerId,jobId,ownerNote} = req.body      

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
                ownerNote,
                isEmployerAccepet:true
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
        const {ownerNote,isEmployerAccepet} = req.body      

        const targetRequest = await prisma.hiringRequest.update({
            where:{
                id
            },
            data:{
                ownerNote,
                isEmployerAccepet,         
            },
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
        const targetRequest = await prisma.hiringRequest.update({
            where:{
                id
            },
            data:{
                isFreelancerAccept,
                freelancerNote,
            }
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
                freelancerId:id
            }
        }).then(async(length)=>{
            const data = await prisma.hiringRequest.findMany({
                where:{
                    freelancerId:id
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
                ownerId:id
            }
        }).then(async(length)=>{
            const data = await prisma.hiringRequest.findMany({
                where:{
                    ownerId:id
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