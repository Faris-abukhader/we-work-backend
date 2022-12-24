const {
  createOneRequest,
  updateOneRequest,
  deleteOneRequest,
  freelancerAcceptingRequest,
  getOneFreelancerAllHiringRequest,
  getOneEmployerAllHiringRequest,
  getOneJobAllHiringRequest,
} =  require('./hiringRequestController')

const {hiringRequestObj} = require('../util/schemaContainer')
// const { adminMiddleware } = require('../preValiadtion/admin')
// const { staffMiddleware } = require('../preValiadtion/staff')

// const {
//     websiteMiddleware
// } = require('../preValiadtion/website')


const createOneRequestSchema = {
    schema: {
      tags:['hiring Request'],
        body:{
          type:'object',
          required:['ownerId','freelancerId','jobId','ownerNote','salary'],
          properties:{
            ownerId:{type:'integer'},
            freelancerId:{type:'integer'},
            jobId:{type:'number'},
            ownerNote:{type:'string'},
            salary:{type:'number'},
          }
        },
        response:{
            200:hiringRequestObj
        }
      },
      // preValidation:websiteMiddleware,
      handler:createOneRequest
}


const updateOneRequestSchema = {
  schema: {
    tags:['hiring Request'],
    params: {
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
      }
    },
    body:{
      type:'object',
      required:['ownerNote','isEmployerAccepet','salary'],
      properties:{
        ownerNote:{type:'string'},
        isEmployerAccepet:{type:'boolean'},
        salary:{type:'number'},
      }
    },
      response:{
      200:hiringRequestObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:updateOneRequest
}

const deleteOneRequestSchema = {
  schema: {
    tags:['hiring Request'],
    params: {
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
      }
    },
    response:{
        200:hiringRequestObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:deleteOneRequest
}

const freelancerAcceptingRequestSchema = {
  schema: {
    tags:['hiring Request'],
    params: {
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
      }
    },
    body:{
      type: 'object',
      required: ['isFreelancerAccept'],
      properties:{
        isFreelancerAccept : {type:'boolean'},
        freelancerNote : {type:'string'}
      } 
    },
    response:{
        200:hiringRequestObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:freelancerAcceptingRequest
}

const getFreelancerAllHriringRequestlSchema = {
  schema: {
    tags:['hiring Request'],
    params: {
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
      }
    },
    response:{
        200:{
          type: 'object',
          properties: {
            data:{
              type: 'array',
              item: hiringRequestObj,
            },          
            pageNumber: { type: 'integer' },
          }
        }
    }
  },
  // preValidation:websiteMiddleware,
  handler:getOneFreelancerAllHiringRequest
}


const getEmployerAllHriringRequestlSchema = {
  schema: {
    tags:['hiring Request'],
    params: {
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
      }
    },
    response:{
        200:{
          type: 'object',
          properties: {
            data:{
              type: 'array',
              item: hiringRequestObj,
            },          
            pageNumber: { type: 'integer' },
          }
        }
    }
  },
  // preValidation:websiteMiddleware,
  handler:getOneEmployerAllHiringRequest
}


const getOneJobAllHriringRequestlSchema = {
  schema: {
    tags:['hiring Request'],
    params: {
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
      }
    },
    response:{
        200:{
          type: 'object',
          properties: {
            data:{
              type: 'array',
              item: hiringRequestObj,
            },          
            pageNumber: { type: 'integer' },
          }
        }
    }
  },
  // preValidation:websiteMiddleware,
  handler:getOneJobAllHiringRequest
}
module.exports = {
  createOneRequestSchema,
  updateOneRequestSchema,
  deleteOneRequestSchema,
  freelancerAcceptingRequestSchema,
  getFreelancerAllHriringRequestlSchema,
  getEmployerAllHriringRequestlSchema,
  getOneJobAllHriringRequestlSchema,
}