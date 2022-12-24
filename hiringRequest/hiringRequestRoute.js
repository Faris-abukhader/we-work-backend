const {
  createOneRequestSchema,
  updateOneRequestSchema,
  deleteOneRequestSchema,
  freelancerAcceptingRequestSchema,
  getFreelancerAllHriringRequestlSchema,
  getEmployerAllHriringRequestlSchema,
  getOneJobAllHriringRequestlSchema,
} = require('./hiringRequestSchema')

const hiringRequestRoutes = async(fastify, options, done)=> {

    fastify.post('/', createOneRequestSchema)

    fastify.put('/freelancer/:id',freelancerAcceptingRequestSchema)

    fastify.put('/:id',updateOneRequestSchema)

    fastify.delete('/:id',deleteOneRequestSchema)

    fastify.get('/freelancer/all/:id',getFreelancerAllHriringRequestlSchema)

    fastify.get('/employer/all/:id',getEmployerAllHriringRequestlSchema)

    fastify.get('/job/all/:id',getOneJobAllHriringRequestlSchema)
    
}
  
module.exports = hiringRequestRoutes