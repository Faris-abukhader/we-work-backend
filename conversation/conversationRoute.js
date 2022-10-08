const {
  createOneEducationSchema,
  updateOneEducationSchema,
  deleteOneEductaionSchema,
} = require('./conversationSchema')

const conversationRoutes = async(fastify, options, done)=> {
  
    fastify.post('/', createOneEducationSchema)

    fastify.put('/:userId',updateOneEducationSchema)

    fastify.delete('/:id',deleteOneEductaionSchema)
    
}
  
module.exports = conversationRoutes