const {
  createOneEmploymentHistorySchema,
  updateOneEmploymentHistorySchema,
  deleteOneEmploymentHistorySchema
} = require('./employmentHistorySchema')

const employmentHistoryRoutes = async(fastify, options, done)=> {
  
    fastify.post('/:id', createOneEmploymentHistorySchema)

    fastify.put('/',updateOneEmploymentHistorySchema)

    fastify.delete('/:id', deleteOneEmploymentHistorySchema)
    
}
  
module.exports = employmentHistoryRoutes