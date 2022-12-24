const {
  createOneCertification,
  updateOneCertification,
  deleteOneCertification
} =  require('./certificationController')

const {certificationObj} = require('../util/schemaContainer')
// const { adminMiddleware } = require('../preValiadtion/admin')
// const { staffMiddleware } = require('../preValiadtion/staff')

// const {
//     websiteMiddleware
// } = require('../preValiadtion/website')


const createOneCertificationSchema = {
    schema: {
      tags:['certification'],
        params: {
          type: 'object',
          required: ['id'],
          properties:{
            id : {type:'integer'},
          }
        },
        body:{
          type:'object',
          required:['fromWhere','issuedDate','name'],
          properties:{
            fromWhere:{type:'string'},
            issuedDate:{type:'string'},
            name:{type:'string'},
            description:{type:'string'},
          }
        },
        response:{
            200:certificationObj
        }
      },
      // preValidation:websiteMiddleware,
      handler:createOneCertification
}


const updateOneCertificationSchema = {
  schema: {
    tags:['certification'],
    body:{
      type:'object',
      required:['id','fromWhere','issuedDate','name'],
      properties:{
        id:{type:'integer'},
        fromWhere:{type:'string'},
        issuedDate:{type:'string'},
        name:{type:'string'},
        description:{type:'string'},
      }
    },
    response:{
        200:certificationObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:updateOneCertification
}

const deleteOneCertificationSchema = {
  schema: {
    tags:['certification'],
    params: {
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
      }
    },
    response:{
        200:certificationObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:deleteOneCertification
}


module.exports = {
  createOneCertificationSchema,
  updateOneCertificationSchema,
  deleteOneCertificationSchema,
}