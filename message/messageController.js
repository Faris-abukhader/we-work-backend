const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const sendOneMessage = async(req,reply)=>{
    try{     
        const {conversationId,senderId,content} = req.body      

        const newMessage = await prisma.message.create({
            data:{
                conversation:{
                    connect:{
                        id:conversationId
                    }
                },
                senderId,
                content,
            },
        })

        reply.send(newMessage)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

module.exports = {
    sendOneMessage,
}