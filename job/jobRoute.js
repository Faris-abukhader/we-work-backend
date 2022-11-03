const {
  createOneJobSchema,
  updateOneJobSchema,
  toggleOneJobSchema,
  deleteOneJobSchema,
  getAllAvailableJobSchema,
  getOneEmployerAllJobsSchema,
  getOneJobSchema,
  searchJobSchema
} = require('./jobSchema')

const jobRoutes = async(fastify, options, done)=> {
  
    fastify.post('/:id', createOneJobSchema)

    fastify.put('/toggle',toggleOneJobSchema)

    fastify.put('/',updateOneJobSchema)

    fastify.delete('/:id',deleteOneJobSchema)

    fastify.get('/:id',getOneJobSchema)

    fastify.get('/all/:pageNumber?',getAllAvailableJobSchema)

    fastify.get('/all/employerId/:id/:pageNumber?',getOneEmployerAllJobsSchema)

    fastify.get('/search',searchJobSchema)
}
  
module.exports = jobRoutes