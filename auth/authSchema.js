const {
  signUp,
  staffSignIn,
  signIn,
  verify,
  sendRequestForNewPassword,
  resetPassword,
} =  require('./authController')

const {userObj} = require('../util/schemaContainer')
// const { adminMiddleware } = require('../preValiadtion/admin')
// const { staffMiddleware } = require('../preValiadtion/staff')

// const {
//     websiteMiddleware
// } = require('../preValiadtion/website')


const signUpSchema = {
    schema: {
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




// const getOneUserAllLogsSchema = {
//     schema: {
//         params:{
//             required:['id'],
//             properties:{
//                 id : {type:'string'},
//             }    
//         },
//         response:{
//             200:{
//               type: 'object',
//               properties: {
//                 data:{
//                   type: 'array',
//                   item: logObj,
//                 },          
//                 pageNumber: { type: 'integer' },
//               }
//             }
//         }
//       },
//       preValidation:staffMiddleware,
//       handler:getOneUserAllLogs

// }


// const getAllLogsSchema = {
//   schema: {
//       response:{
//           200:{
//             type: 'object',
//             properties: {
//               data:{
//                 type: 'array',
//                 item: logObj,
//               },          
//               pageNumber: { type: 'integer' },
//             }
//           }
//       }
//     },
//     preValidation:adminMiddleware,
//     handler:getAllLogs

// }

module.exports = {
    signUpSchema,
    signInSchema,
    // getOneUserAllLogsSchema,
    // getAllLogsSchema
}