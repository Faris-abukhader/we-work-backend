const {
  createOneProposal,
  updateOneProposal,
  deleteOneProposal,
  getOneProposal,
  getOneJobProposals,
  getOneFreelancerProposals,
  acceptOneProposal,
  declineOneProposal
} =  require('./proposalController')

const {proposalObj} = require('../util/schemaContainer')
// const { adminMiddleware } = require('../preValiadtion/admin')
// const { staffMiddleware } = require('../preValiadtion/staff')

// const {
//     websiteMiddleware
// } = require('../preValiadtion/website')


const createOneProposalSchema = {
    schema: {
      tags:['proposal'],
        body:{
          type:'object',
          required:['ownerId','jobId','bid','timeNeeded','description'],
          properties:{
            ownerId:{type:'integer'},
            jobId:{type:'integer'},
            bid:{type:'number'},
            timeNeeded:{type:'string'},
            description:{type:'string'},
          }
        },
        response:{
            200:proposalObj
        }
      },
      // preValidation:websiteMiddleware,
      handler:createOneProposal
}


const updateOneProposalSchema = {
  schema: {
    tags:['proposal'],
    params: {
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
      }
    },
    body:{
      type:'object',
      required:['bid','timeNeeded','description'],
      properties:{
        bid:{type:'number'},
        timeNeeded:{type:'string'},
        description:{type:'string'},
      }
    },
      response:{
      200:proposalObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:updateOneProposal
}

const deleteOneProposalSchema = {
  schema: {
    tags:['proposal'],
    params: {
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
      }
    },
    response:{
        200:proposalObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:deleteOneProposal
}

const getOneJobAllProposalsSchema = {
  schema: {
    tags:['proposal'],
    params: {
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
        pageNumber : {type:'integer'},
      }
    },
    response:{
        200:{
          type: 'object',
          properties: {
            data:{
              type: 'array',
              item: proposalObj,
            },          
            pageNumber: { type: 'integer' },
          }
        }
    }
  },
  // preValidation:websiteMiddleware,
  handler:getOneJobProposals
}


const getOneFreelancerAllProposalsSchema = {
  schema: {
    tags:['proposal'],
    params: {
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
        pageNumber : {type:'integer'},
      }
    },
    response:{
        200:{
          type: 'object',
          properties: {
            data:{
              type: 'array',
              item: proposalObj,
            },          
            pageNumber: { type: 'integer' },
          }
        }
    }
  },
  // preValidation:websiteMiddleware,
  handler:getOneFreelancerProposals
}


const getOneProposalSchema = {
  schema: {
    tags:['proposal'],
    params: {
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
      }
    },
    response:{
        200:proposalObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:getOneProposal
}

const acceptOneProposalSchema = {
  schema: {
    tags:['proposal'],
    params: {
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
      }
    },
    response:{
        200:proposalObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:acceptOneProposal
}

const declineOneProposalSchema = {
  schema: {
    tags:['proposal'],
    params: {
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
      }
    },
    response:{
        200:proposalObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:declineOneProposal
}


module.exports = {
  createOneProposalSchema,
  updateOneProposalSchema,
  deleteOneProposalSchema,
  getOneProposalSchema,
  getOneJobAllProposalsSchema,
  getOneFreelancerAllProposalsSchema,
  acceptOneProposalSchema,
  declineOneProposalSchema,
}