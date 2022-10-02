const {
  createOneJobSchema,
  updateOneJobSchema,
  deleteOneJobSchema,
  getAllAvailableJobSchema,
  searchJobSchema
} = require('./jobSchema')

const jobRoutes = async(fastify, options, done)=> {
  
    fastify.post('/:id', createOneJobSchema)

    fastify.put('/',updateOneJobSchema)

    fastify.delete('/:id',deleteOneJobSchema)

    fastify.get('/all/:pageNumber?',getAllAvailableJobSchema)

    fastify.get('/search',searchJobSchema)
}
  
module.exports = jobRoutes