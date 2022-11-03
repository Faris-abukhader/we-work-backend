const {
  sendOneMessage
} =  require('./messageController')

const {messageObj} = require('../util/schemaContainer')
// const { adminMiddleware } = require('../preValiadtion/admin')
// const { staffMiddleware } = require('../preValiadtion/staff')

// const {
//     websiteMiddleware
// } = require('../preValiadtion/website')


const sendOneMessageSchema = {
    schema: {
      tags:['message'],
        body:{
          type:'object',
          required:['conversationId','senderId','content'],
          properties:{
            conversationId:{type:'integer'},
            senderId:{type:'integer'},
            content:{type:'string'},
          }
        },
        response:{
            200:messageObj
        }
      },
      // preValidation:websiteMiddleware,
      handler:sendOneMessage
}

module.exports = {
  sendOneMessageSchema,
}