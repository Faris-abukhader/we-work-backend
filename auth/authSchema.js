const {
    getOneUserById,
    getAllUsers

} =  require('./userController')
// const { adminMiddleware } = require('../preValiadtion/admin')
// const { staffMiddleware } = require('../preValiadtion/staff')

// const {
//     websiteMiddleware
// } = require('../preValiadtion/website')

const createOneLogSchema = {
    schema: {
        body: {
          type: 'object',
          required: ['content','topic','issuer'],
          properties:{
            contenct : {type:'string'},
            topic : {type:'string'},
            issuer : {type:'string'},
          }
        },
        response:{
            200:logObj
        }
      },
      preValidation:websiteMiddleware,
      handler:createOneLog

}


const getOneUserAllLogsSchema = {
    schema: {
        params:{
            required:['id'],
            properties:{
                id : {type:'string'},
            }    
        },
        response:{
            200:{
              type: 'object',
              properties: {
                data:{
                  type: 'array',
                  item: logObj,
                },          
                pageNumber: { type: 'integer' },
              }
            }
        }
      },
      preValidation:staffMiddleware,
      handler:getOneUserAllLogs

}


const getAllLogsSchema = {
  schema: {
      response:{
          200:{
            type: 'object',
            properties: {
              data:{
                type: 'array',
                item: logObj,
              },          
              pageNumber: { type: 'integer' },
            }
          }
      }
    },
    preValidation:adminMiddleware,
    handler:getAllLogs

}

module.exports = {
    createOneLogSchema,
    getOneUserAllLogsSchema,
    getAllLogsSchema
}