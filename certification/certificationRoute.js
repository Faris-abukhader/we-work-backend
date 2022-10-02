const {
  createOneCertificationSchema,
  updateOneCertificationSchema,
  deleteOneCertificationSchema,
} = require('./certificationSchema')

const certificationRoutes = async(fastify, options, done)=> {
  
    fastify.post('/:id', createOneCertificationSchema)

    fastify.put('/:userId',updateOneCertificationSchema)

    fastify.delete('/:id',deleteOneCertificationSchema)
    
}
  
module.exports = certificationRoutes