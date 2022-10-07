const {
  createOneProposal,
  updateOneProposal,
  deleteOneProposal,
  getOneProposal,
  getOneJobProposals,
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

const getOneProposalSchema = {
  schema: {
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
  acceptOneProposalSchema,
  declineOneProposalSchema,
}