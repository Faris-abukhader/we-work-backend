const {
  getOneFreelancerByEmail,
  updateFreelancerInfo,
} =  require('./freelancerController')

const {userObj} = require('../util/schemaContainer')
// const { adminMiddleware } = require('../preValiadtion/admin')
// const { staffMiddleware } = require('../preValiadtion/staff')

// const {
//     websiteMiddleware
// } = require('../preValiadtion/website')


const getOneFreelancerByEmailSchema = {
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
      handler:getOneFreelancerByEmail
}


const updateFreelancerInfoSchema = {
  schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties:{
          id : {type:'integer'},
        }
      },
      body:{
        type: 'object',
        required: ['firstName','lastName'],
        properties:{
          firstName : {type:'string'},
          lastName : {type:'string'},
          nationality : {type:'string'},
          avatar : {type:'string'},
          currentLocation : {type:'string'},
          hourlyPrice : {type:'integer'},
          weeklyWantingHour : {type:'integer'},
          aboutMe : {type:'string'},
          shortIntr : {type:'string'},
        }
      },
      response:{
          200:userObj
      }
    },
    // preValidation:websiteMiddleware,
    handler:updateFreelancerInfo
}


module.exports = {
  getOneFreelancerByEmailSchema,
  updateFreelancerInfoSchema
}