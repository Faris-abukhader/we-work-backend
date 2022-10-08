const {
  createOneEmploymentHistory,
  updateOneEmploymentHistory,
  deleteOneEmploymentHistory
} =  require('./employmentHistoryController')

const {employmentHistoryObj} = require('../util/schemaContainer')
// const { adminMiddleware } = require('../preValiadtion/admin')
// const { staffMiddleware } = require('../preValiadtion/staff')

// const {
//     websiteMiddleware
// } = require('../preValiadtion/website')


const createOneEmploymentHistorySchema = {
    schema: {
      tags:['employment History'],
        params: {
          type: 'object',
          required: ['id'],
          properties:{
            id : {type:'integer'},
          }
        },
        body:{
          type:'object',
          required: ['companyName','country','position','city','fromDate','untilDate'],
          properties:{
            companyName :{type:'string'},
            position :{type:'string'},
            country :{type:'string'},
            city :{type:'string'},
            fromDate :{type:'string'},
            untilDate :{type:'string'},
            description :{type:'string'},
          }
        },
        response:{
            200:employmentHistoryObj
        }
      },
      // preValidation:websiteMiddleware,
      handler:createOneEmploymentHistory
}


const updateOneEmploymentHistorySchema = {
  schema: {
    tags:['employment History'],
    body:{
      type: 'object',
      required: ['id','companyName','country','position','city','fromDate','untilDate'],
      properties:{
        id : {type:'integer'},
        companyName : {type:'string'},
        position :{type:'string'},
        country : {type:'string'},
        city : {type:'string'},
        fromDate : {type:'string'},
        untilDate : {type:'string'},
        description : {type:'string'},
      }
    },
    response:{
        200:employmentHistoryObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:updateOneEmploymentHistory
}


const deleteOneEmploymentHistorySchema = {
  schema: {
    tags:['employment History'],
    params:{
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
      }
    },
    response:{
        200:employmentHistoryObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:deleteOneEmploymentHistory
}



module.exports = {
  createOneEmploymentHistorySchema,
  updateOneEmploymentHistorySchema,
  deleteOneEmploymentHistorySchema
}