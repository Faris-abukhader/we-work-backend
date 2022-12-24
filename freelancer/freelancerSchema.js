const {
  getOneFreelancerByEmail,
  getOneFreelancerById,
  updateFreelancerInfo,
  getAllFreelancer,
  freelancerStatics,
  setWeeklyWantingHour,
  updateFreelancerAboutMe,
  updateFreelancerAvatar
} =  require('./freelancerController')

const {userObj, freelancerObj} = require('../util/schemaContainer')
// const { adminMiddleware } = require('../preValiadtion/admin')
// const { staffMiddleware } = require('../preValiadtion/staff')

// const {
//     websiteMiddleware
// } = require('../preValiadtion/website')


const getOneFreelancerByEmailSchema = {
    schema: {
      tags:['freelancer'],
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

const getOneFreelancerByIdSchema = {
  schema: {
    tags:['freelancer'],
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
    handler:getOneFreelancerById
}


const updateFreelancerInfoSchema = {
  schema: {
    tags:['freelancer'],
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



const getAllFreelancerSchema = {
  schema: {
    tags:['freelancer'],
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
            item: freelancerObj,
          },          
          pageNumber: { type: 'integer' },
        }
      }
    }
  },
  // preValidation:websiteMiddleware,
  handler:getAllFreelancer
}



const freelancerStaticsSchema = {
  schema: {
    tags:['freelancer'],
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
                proposalList : {type:'integer'},
                hiringRequest : {type:'integer'},
                products : {type:'integer'},
              }
            }
          }
      }
    },
    // preValidation:websiteMiddleware,
    handler:freelancerStatics
}

const setWeeklyWantingHourSchema = {
  schema: {
    tags:['freelancer'],
      params: {
        type: 'object',
        required: ['id'],
        properties:{
          id : {type:'integer'},
        }
      },
      response:200
    },
    // preValidation:websiteMiddleware,
    handler:setWeeklyWantingHour
}

const updateFreelancerAboutMeSchema = {
  schema: {
    tags:['freelancer'],
      params: {
        type: 'object',
        required: ['id'],
        properties:{
          id : {type:'integer'},
        },
      },
      body:{
        type:'object',
        required:['aboutMe'],
        properties:{
          aboutMe : {type:'string'}
        }
      },
      response:200
    },
    // preValidation:websiteMiddleware,
    handler:updateFreelancerAboutMe
}

const updateFreelancerAvatarSchema = {
  schema: {
    tags:['freelancer'],
      params: {
        type: 'object',
        required: ['id'],
        properties:{
          id : {type:'integer'},
        },
      },
      body:{
        type:'object',
        required:['avatar'],
        properties:{
          avatar : {type:'string'}
        }
      },
      response:200
    },
    // preValidation:websiteMiddleware,
    handler:updateFreelancerAvatar
}


module.exports = {
  getOneFreelancerByEmailSchema,
  getOneFreelancerByIdSchema,
  updateFreelancerInfoSchema,
  getAllFreelancerSchema,
  freelancerStaticsSchema,
  setWeeklyWantingHourSchema,
  updateFreelancerAboutMeSchema,
  updateFreelancerAvatarSchema
}