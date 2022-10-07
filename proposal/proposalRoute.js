const {
  createOneProposalSchema,
  updateOneProposalSchema,
  deleteOneProposalSchema,
  getOneProposalSchema,
  getOneJobAllProposalsSchema,
  acceptOneProposalSchema,
  declineOneProposalSchema,
} = require('./proposalSchema')

const proposalRoutes = async(fastify, options, done)=> {

    fastify.get('/:id', getOneProposalSchema)

    fastify.get('/job/:id', getOneJobAllProposalsSchema)

    fastify.post('/', createOneProposalSchema)

    fastify.put('/accept/:id',acceptOneProposalSchema)

    fastify.put('/decline/:id',declineOneProposalSchema)

    fastify.put('/:id',updateOneProposalSchema)

    fastify.delete('/:id',deleteOneProposalSchema)
    
}
  
module.exports = proposalRoutes