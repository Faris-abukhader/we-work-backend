const {
  createOneEducation,
  updateOneEducation,
  deleteOneEductaion
} =  require('./conversationController')

const {conversationObj} = require('../util/schemaContainer')
// const { adminMiddleware } = require('../preValiadtion/admin')
// const { staffMiddleware } = require('../preValiadtion/staff')

// const {
//     websiteMiddleware
// } = require('../preValiadtion/website')


const createOneEducationSchema = {
    schema: {
      tags:['conversation'],
        params: {
          type: 'object',
          required: ['id'],
          properties:{
            id : {type:'integer'},
          }
        },
        body:{
          type:'object',
          required:['schoolName','dateAttend','dateGraduate','areaOfStudy','degree'],
          properties:{
            schoolName:{type:'string'},
            dateAttend:{type:'string'},
            dateGraduate:{type:'string'},
            areaOfStudy:{type:'string'},
            degree:{type:'string'},
            description:{type:'string'},
          }
        },
        response:{
            200:conversationObj
        }
      },
      // preValidation:websiteMiddleware,
      handler:createOneEducation
}


const updateOneEducationSchema = {
  schema: {
    tags:['conversation'],
    body:{
      type:'object',
      required:['id','schoolName','dateAttend','dateGraduate','areaOfStudy','degree'],
      properties:{
        id:{type:'integer'},
        schoolName:{type:'string'},
        dateAttend:{type:'string'},
        dateGraduate:{type:'string'},
        areaOfStudy:{type:'string'},
        degree:{type:'string'},
        description:{type:'string'},
      }
    },
    response:{
        200:conversationObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:updateOneEducation
}

const deleteOneEductaionSchema = {
  schema: {
    tags:['conversation'],
    params: {
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
      }
    },
    response:{
        200:conversationObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:deleteOneEductaion
}


module.exports = {
  createOneEducationSchema,
  updateOneEducationSchema,
  deleteOneEductaionSchema,
}