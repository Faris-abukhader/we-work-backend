const {
  createOneProductSchema,
  updateOneProductSchema,
  deleteOneProductSchema,
  employerRateProductSchema,
  getOneProductByIdSchema,
  getOneFreelancerAllProductSchema,
  getOneEmployerAllProductSchema,
} = require('./productSchema')

const productRoutes = async(fastify, options, done)=> {
  
    fastify.post('/', createOneProductSchema)

    fastify.put('/:id',updateOneProductSchema)

    fastify.put('/rate/:id',employerRateProductSchema)

    fastify.delete('/:id',deleteOneProductSchema)

    fastify.get('freelancer/:id/:pageNumber?',getOneFreelancerAllProductSchema)

    fastify.get('employer/:id/:pageNumber?',getOneEmployerAllProductSchema)

    fastify.get('/:id',getOneProductByIdSchema)
    
}
  
module.exports = productRoutes