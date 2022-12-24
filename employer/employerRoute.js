const {
  getOneEmployerByEmailSchema,
  getOneEmployerByIdSchema,
  updateEmployerInfoSchema,
  employerStaticsSchema
} = require('./employerSchema')

const employerRoutes = async(fastify, options, done)=> {

    fastify.get('/email/:email', getOneEmployerByEmailSchema)

    fastify.get('/:id', getOneEmployerByIdSchema)
  
    fastify.get('/statics/:id', employerStaticsSchema)

    fastify.put('/:id',updateEmployerInfoSchema)
    
}
  
module.exports = employerRoutes