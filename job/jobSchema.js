const {
  createOneJob,
  updateOneJob,
  toggleOneJob,
  deleteOneJob,
  getAllAvailableJob,
  getOneEmployerAllJobs,
  getOneJob,
  searchJob
} =  require('./jobController')

const {jobObj, proposalObj} = require('../util/schemaContainer')
// const { adminMiddleware } = require('../preValiadtion/admin')
// const { staffMiddleware } = require('../preValiadtion/staff')

// const {
//     websiteMiddleware
// } = require('../preValiadtion/website')

const createOneJobSchema = {
    schema: {
      tags:['job'],
        params: {
          type: 'object',
          required: ['id'],
          properties:{
            id : {type:'integer'},
          }
        },
        body:{
          type:'object',
          required:['title','location','description','salary','skillRequired','jobCategory'],
          properties:{
            title:{type:'string'},
            location:{type:'string'},
            description:{type:'string'},
            salary:{type:'number'},
            skillRequired:{type:'string'},
            jobCategory:{type:'string'},
          }
        },
        response:{
            200:jobObj
        }
      },
      // preValidation:websiteMiddleware,
      handler:createOneJob
}


const updateOneJobSchema = {
  schema: {
    tags:['job'],
    body:{
      type:'object',
      required:['title','location','description','salary','skillRequired','jobCategory'],
      properties:{
        title:{type:'string'},
        location:{type:'string'},
        description:{type:'string'},
        salary:{type:'number'},
        skillRequired:{type:'string'},
        jobCategory:{type:'string'},
      }
    },
    response:{
    200:jobObj
   }
  },
  // preValidation:websiteMiddleware,
  handler:updateOneJob
}

const toggleOneJobSchema = {
  schema: {
    tags:['job'],
    body:{
      type:'object',
      required:['id','isClosed'],
      properties:{
        id:{type:'integer'},
        isClosed:{type:'boolean'},
      }
    },
    response:{
    200:jobObj
   }
  },
  // preValidation:websiteMiddleware,
  handler:toggleOneJob
}


const deleteOneJobSchema = {
  schema: {
    tags:['job'],
    params: {
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
      }
    },
    response:{
        200:jobObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:deleteOneJob
}

const getAllAvailableJobSchema = {
  schema: {
    tags:['job'],
    params: {
      type: 'object',
      properties:{
        pageNumber : {type:'integer'},
      }
    },
    response: {
      200:{
        type: 'object',
        properties: {
          data:{
            type: 'array',
            item: jobObj,
          },          
          pageNumber: { type: 'integer' },
        }
      }
    },
  },
  // preValidation:websiteMiddleware,
  handler:getAllAvailableJob
}



const getOneEmployerAllJobsSchema = {
  schema: {
    tags:['job'],
    params: {
      type: 'object',
      required:['id'],
      properties:{
        id: {type:'integer'},
        pageNumber : {type:'integer'},
      }
    },
    response: {
      200:{
        type: 'object',
        properties: {
          data:{
            type: 'array',
            item: jobObj,
          },          
          pageNumber: { type: 'integer' },
        }
      }
    },
  },
  // preValidation:websiteMiddleware,
  handler:getOneEmployerAllJobs
}


const getOneJobSchema = {
  schema: {
    tags:['job'],
    params: {
      type: 'object',
      required:['id'],
      properties:{
        id : {type:'integer'},
      }
    },
    response: {
      200:jobObj
    },
  },
  // preValidation:websiteMiddleware,
  handler:getOneJob
}


const searchJobSchema = {
  schema: {
    tags:['job'],
    query:{
      type: 'object',
      required:['name'],
      properties:{
        name : {type:'string'},
        category : {type:'string'},
        location : {type:'string'},
        skill : {type:'string'},
      }
    },
    params: {
      type: 'object',
      properties:{
        pageNumber : {type:'integer'},
      }
    },
    response:{
      200:{
        type: 'object',
        properties: {
          data:{
            type: 'array',
            item: jobObj,
          },          
          pageNumber: { type: 'integer' },
        }
      }
    }
  },
  // preValidation:websiteMiddleware,
  handler:searchJob
}

module.exports = {
  createOneJobSchema,
  updateOneJobSchema,
  toggleOneJobSchema,
  deleteOneJobSchema,
  getAllAvailableJobSchema,
  getOneEmployerAllJobsSchema,
  getOneJobSchema,
  searchJobSchema
}