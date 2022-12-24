const {
  createOneConversation,
  deleteOneConversation,
  getOneUserConversations,
  getOneConversationAllMessages
} =  require('./conversationController')

const {conversationObj, userObj, messageObj} = require('../util/schemaContainer')
// const { adminMiddleware } = require('../preValiadtion/admin')
// const { staffMiddleware } = require('../preValiadtion/staff')

// const {
//     websiteMiddleware
// } = require('../preValiadtion/website')


const createOneConversationSchema = {
    schema: {
      tags:['conversation'],
        body:{
          type:'object',
          required:['users'],
          properties:{
            users:{
              type:'array',
              items:{
                type:'object',
                required:['id'],
                properties:{
                  id:{type:'integer'}
                }
              }
            },
          }
        },
        response:{
            200:conversationObj
        }
      },
      // preValidation:websiteMiddleware,
      handler:createOneConversation
}

const deleteOneConversationSchema = {
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
  handler:deleteOneConversation
}

const getOneConversationAllMessagesSchema = {
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
  handler:getOneConversationAllMessages
}


const getOneUserAllConversationSchema = {
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
        200:{
          type:'object',
          properties:{
           data:{
            type:'array',
            items:conversationObj
           },
           pageNumber:{type:'integer'}
          }
        }
    }
  },
  // preValidation:websiteMiddleware,
  handler:getOneUserConversations
}


module.exports = {
  createOneConversationSchema,
  deleteOneConversationSchema,
  getOneConversationAllMessagesSchema,
  getOneUserAllConversationSchema
}