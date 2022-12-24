const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const {conversationRange} = require('../util/paginationRange')

const createOneConversation = async(req,reply)=>{
    try{     
        const {users} = req.body      

        const newConversation = await prisma.conversation.create({
            data:{
                users:{
                    connect:users.map((item)=>({id:item.id}))
                }
            },
        })

        reply.send(newConversation)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const deleteOneConversation = async(req,reply)=>{
    try{
        const {id} = req.params

        const targetConversation = await prisma.conversation.delete({
            where:{
                id
            },
        })

        reply.send(targetConversation)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const getOneUserConversations = async(req,reply)=>{
    try{
        const {id} = req.params

        let pageNo = 0
        let toSkip = false
        if(req.params.pageNumber){
          pageNo = req.params.pageNumber
          toSkip = true
        }
    
        await prisma.conversation.count({
            where:{
                users:{
                    some:{
                        id
                    }
                }
            }
        }).then(async(length)=>{
            const data = await prisma.conversation.findMany({
                where:{
                    users:{
                        some:{
                            id
                        }
                    }
                },
                take:conversationRange,
                skip:toSkip ? (pageNo-1)*conversationRange:0, 
                include:{
                    messages:{
                        take:1,
                        orderBy:{
                            createdAt:'desc'
                        }
                    }
                }
            })   
            reply.send({data,pageNumber:Math.ceil(length/conversationRange)}) 
        })

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const getOneConversationAllMessages = async(req,reply)=>{
    try{
        const {id} = req.params

        const messages = await prisma.conversation.findUnique({
            where:{
                id
            },
            select:{
                id:true,
                createdAt:true,
                users:{
                    select:{
                        firstName:true,
                        lastName:true,
                        avatar:true
                    }
                },
                messages:{
                    orderBy:{
                        createdAt:'desc'
                    }
                }
            }
        })   
        console.log(messages)
        reply.send(messages) 
    }catch(err){
        console.log(err)
        reply.send(err)  
    }
}

module.exports = {
    createOneConversation,
    deleteOneConversation,
    getOneUserConversations,
    getOneConversationAllMessages
}