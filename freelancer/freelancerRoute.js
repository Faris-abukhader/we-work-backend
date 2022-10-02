const {
  getOneFreelancerByEmailSchema,
  updateFreelancerInfoSchema
} = require('./freelancerSchema')

const freelancerRoutes = async(fastify, options, done)=> {
  
    fastify.get('/:email', getOneFreelancerByEmailSchema)

    fastify.put('/:id',updateFreelancerInfoSchema)
    
}
  
module.exports = freelancerRoutes