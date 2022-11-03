const {
  createOneProposalSchema,
  updateOneProposalSchema,
  deleteOneProposalSchema,
  getOneProposalSchema,
  getOneJobAllProposalsSchema,
  getOneFreelancerAllProposalsSchema,
  acceptOneProposalSchema,
  declineOneProposalSchema,
} = require('./proposalSchema')

const proposalRoutes = async(fastify, options, done)=> {

    fastify.get('/:id', getOneProposalSchema)

    fastify.get('/job/:id', getOneJobAllProposalsSchema)

    fastify.get('/freelancer/:id', getOneFreelancerAllProposalsSchema)

    fastify.post('/', createOneProposalSchema)

    fastify.put('/accept/:id',acceptOneProposalSchema)

    fastify.put('/decline/:id',declineOneProposalSchema)

    fastify.put('/:id',updateOneProposalSchema)

    fastify.delete('/:id',deleteOneProposalSchema)
    
}
  
module.exports = proposalRoutes