const {
  signUp,
  signIn,
  verify,
  sendRequestForNewPassword,
  resetPassword,
  resendVerifyingEmail,
} =  require('./authController')

const {userObj} = require('../util/schemaContainer')
// const { adminMiddleware } = require('../preValiadtion/admin')
// const { staffMiddleware } = require('../preValiadtion/staff')

// const {
//     websiteMiddleware
// } = require('../preValiadtion/website')


const signUpSchema = {
    schema: {
      tags: ['auth'],
        body: {
          type: 'object',
          required: ['email','password','firstName','lastName','accountType'],
          properties:{
            email : {type:'string'},
            password : {type:'string'},
            firstName : {type:'string'},
            lastName : {type:'string'},
            accountType : {type:'string'},
          }
        },
        response:{
            200:userObj
        }
      },
      // preValidation:websiteMiddleware,
      handler:signUp

}


const signInSchema = {
  schema: {
    tags: ['auth'],
      body: {
        type: 'object',
        required: ['email','password'],
        properties:{
          email : {type:'string'},
          password : {type:'string'},
        }
      },
      response:{
          200:userObj
      }
    },
    // preValidation:websiteMiddleware,
    handler:signIn
}


const verifySchema = {
  schema: {
    tags: ['auth'],
      response:200
    },
    // preValidation:websiteMiddleware,
    handler:verify
}


const resendVerifyingEmailSchema = {
  schema: {
    tags: ['auth'],
      params: {
        type: 'object',
        required: ['email'],
        properties:{
          email : {type:'string'},
        }
      },
      response:{
        200:{
          message : {type:'string'}
        }
      }
    },
    // preValidation:websiteMiddleware,
    handler:resendVerifyingEmail
}


const resetPasswordSchema = {
  schema: {
    tags: ['auth'],
      body: {
        type: 'object',
        required: ['password'],
        properties:{
          password : {type:'string'},
        }
      },
      params:{
        properties:{
          token:{type:'string'}
        }
      },
      response:200
    },
    // preValidation:websiteMiddleware,
    handler:resetPassword
}


const sendRequestForNewPasswordSchema = {
  schema: {
    tags: ['auth'],
      body: {
        type: 'object',
        required: ['email'],
        properties:{
          email : {type:'string'},
        }
      },
      response:200
    },
    // preValidation:websiteMiddleware,
    handler:sendRequestForNewPassword
}

module.exports = {
    signUpSchema,
    signInSchema,
    verifySchema,
    resendVerifyingEmailSchema,
    resetPasswordSchema,
    sendRequestForNewPasswordSchema,
}