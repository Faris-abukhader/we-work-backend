const {
  createOneConversationSchema,
  deleteOneConversationSchema,
  getOneConversationAllMessagesSchema,
  getOneUserAllConversationSchema
} = require('./conversationSchema')

const conversationRoutes = async(fastify, options, done)=> {
  
    fastify.post('/', createOneConversationSchema)

    fastify.delete('/:id',deleteOneConversationSchema)

    fastify.get('/user/:id',getOneUserAllConversationSchema)

    fastify.get('/messages/:id',getOneConversationAllMessagesSchema)
    
}
  
module.exports = conversationRoutes