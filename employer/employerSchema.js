const {
  getOneEmployerByEmail,
  getOneEmployerById,
  updateEmployerInfo,
  emplyerStatics
} =  require('./employerController')

const {userObj} = require('../util/schemaContainer')
// const { adminMiddleware } = require('../preValiadtion/admin')
// const { staffMiddleware } = require('../preValiadtion/staff')

// const {
//     websiteMiddleware
// } = require('../preValiadtion/website')


const getOneEmployerByEmailSchema = {
    schema: {
      tags:['employer'],
        params: {
          type: 'object',
          required: ['email'],
          properties:{
            email : {type:'string'},
          }
        },
        response:{
            200:userObj
        }
      },
      // preValidation:websiteMiddleware,
      handler:getOneEmployerByEmail
}


const getOneEmployerByIdSchema = {
  schema: {
    tags:['employer'],
      params: {
        type: 'object',
        required: ['id'],
        properties:{
          email : {type:'integer'},
        }
      },
      response:{
          200:userObj
      }
    },
    // preValidation:websiteMiddleware,
    handler:getOneEmployerById
}


const updateEmployerInfoSchema = {
  schema: {
    tags:['employer'],
      params: {
        type: 'object',
        required: ['id'],
        properties:{
          id : {type:'integer'},
        }
      },
      body:{
        type:'object',
        required: ['firstName','lastName'],
        properties:{
          firstName : {type:'string'},
          lastName : {type:'string'},
          nationality : {type:'string'},
          avatar : {type:'string'},
          currentLocation : {type:'string'},
        }
      },
      response:{
          200:userObj
      }
    },
    // preValidation:websiteMiddleware,
    handler:updateEmployerInfo
}


const employerStaticsSchema = {
  schema: {
    tags:['employer'],
      params: {
        type: 'object',
        required: ['id'],
        properties:{
          id : {type:'integer'},
        }
      },
      response:{
          200:{
            _count:{
              type:'object',
              properties:{
                jobList : {type:'integer'},
                hiringRequest : {type:'integer'},
              }
            }
          }
      }
    },
    // preValidation:websiteMiddleware,
    handler:emplyerStatics
}
module.exports = {
  getOneEmployerByEmailSchema,
  getOneEmployerByIdSchema,
  updateEmployerInfoSchema,
  employerStaticsSchema
}