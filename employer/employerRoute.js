const {
  getOneEmployerByEmailSchema,
  updateEmployerInfoSchema
} = require('./employerSchema')

const employerRoutes = async(fastify, options, done)=> {
  
    fastify.get('/:email', getOneEmployerByEmailSchema)

    fastify.put('/:id',updateEmployerInfoSchema)
    
}
  
module.exports = employerRoutes