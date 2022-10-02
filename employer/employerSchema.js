const {
  getOneEmployerByEmail,
  updateEmployerInfo,
} =  require('./employerController')

const {userObj} = require('../util/schemaContainer')
// const { adminMiddleware } = require('../preValiadtion/admin')
// const { staffMiddleware } = require('../preValiadtion/staff')

// const {
//     websiteMiddleware
// } = require('../preValiadtion/website')


const getOneEmployerByEmailSchema = {
    schema: {
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


const updateEmployerInfoSchema = {
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


module.exports = {
  getOneEmployerByEmailSchema,
  updateEmployerInfoSchema
}