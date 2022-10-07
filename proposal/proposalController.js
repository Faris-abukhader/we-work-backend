const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const {proposalRange} = require('../util/paginationRange')

const createOneProposal = async(req,reply)=>{
    try{     
        const {ownerId,jobId,bid,timeNeeded,description} = req.body      

        const newProposal = await prisma.proposal.create({
            data:{
                freelancer:{
                    connect:{
                        userId:ownerId
                    }
                },
                job:{
                    connect:{
                        id:jobId
                    }
                },
                bid,
                timeNeeded,
                description
            },
        })

        reply.send(newProposal)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const updateOneProposal = async(req,reply)=>{
    try{     
        const {id} = req.params
        const {bid,timeNeeded,description} = req.body      

        const targetProposal = await prisma.proposal.update({
            where:{
              id
            },
            data:{
                bid,
                timeNeeded,
                description
            },
        })

        reply.send(targetProposal)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const deleteOneProposal = async(req,reply)=>{
    try{
        const {id} = req.params

        const targetProposal = await prisma.proposal.delete({
            where:{
                id
            },
        })

        reply.send(targetProposal)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const getOneProposal = async(req,reply)=>{
    try{
        const {id} = req.params
        const targetProposal = await prisma.proposal.findUnique({
            where:{
                id
            }
        })
        reply.send(targetProposal)
    }catch(err){
        console.log(err)
        reply.send(err)
    }

}


const getOneJobProposals = async(req,reply)=>{
    try{
        const {id} = req.params
        let pageNo = 0
        let toSkip = false
        if(req.params.pageNumber){
          pageNo = req.params.pageNumber
          toSkip = true
        }
    
        await prisma.proposal.count({
            where:{
                jobId:id
            }
        }).then(async(length)=>{
            const data = await prisma.proposal.findMany({
                where:{
                    jobId:id
                },
                take:proposalRange,
                skip:toSkip ? (pageNo-1)*proposalRange:0, 
                orderBy:{
                    createdAt:'desc'
                }
            })   
            reply.send({data,pageNumber:Math.ceil(length/proposalRange)}) 
        })


    }catch(err){
        console.log(err)
        reply.send(err)
    }

}

const acceptOneProposal = async(req,reply)=>{
    try{
        const {id} = req.params
        
        const targetProposal = await prisma.proposal.update({
            where:{
                id
            },
            data:{
                isDecline:false,
                isAccepted:true,
                dateOfAccepting:new Date()
            }
        })

        reply.send(targetProposal)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const declineOneProposal = async(req,reply)=>{
    try{
        const {id} = req.params
        
        const targetProposal = await prisma.proposal.update({
            where:{
                id
            },
            data:{
                isDecline:true,
                isAccepted:false,
                dateOfDecline:new Date()
            }
        })

        reply.send(targetProposal)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

module.exports = {
    createOneProposal,
    updateOneProposal,
    deleteOneProposal,
    getOneProposal,
    getOneJobProposals,
    acceptOneProposal,
    declineOneProposal,
}