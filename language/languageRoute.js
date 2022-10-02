const {
  createOneListOfLanguagesSchema,
  updateUserLanguageListSchema
} = require('./languageSchema')

const authRoutes = async(fastify, options, done)=> {
  
    fastify.post('/:id', createOneListOfLanguagesSchema)

    fastify.put('/:id',updateUserLanguageListSchema)
    
}
  
module.exports = authRoutes