const {
  sendOneMessageSchema,
} = require('./messageSchema')

const messageRoutes = async(fastify, options, done)=> {
  
    fastify.post('/', sendOneMessageSchema)
    
}
  
module.exports = messageRoutes