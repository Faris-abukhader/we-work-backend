const {
  createOneLanguageSchema,
  createOneListOfLanguagesSchema,
  updateUserLanguageListSchema,
  deleteOneLanguageSchema
} = require('./languageSchema')

const authRoutes = async(fastify, options, done)=> {
  
    fastify.post('/list/:id', createOneListOfLanguagesSchema)

    fastify.post('/:id', createOneLanguageSchema)

    fastify.put('/:id',updateUserLanguageListSchema)

    fastify.delete('/:id',deleteOneLanguageSchema)
    
}
  
module.exports = authRoutes