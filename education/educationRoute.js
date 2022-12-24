const {
  createOneEducationSchema,
  updateOneEducationSchema,
  deleteOneEductaionSchema,
} = require('./educationSchema')

const educationRoutes = async(fastify, options, done)=> {
  
    fastify.post('/:id', createOneEducationSchema)

    fastify.put('/:userId',updateOneEducationSchema)

    fastify.delete('/:id',deleteOneEductaionSchema)
    
}
  
module.exports = educationRoutes