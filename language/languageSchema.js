const {
  createOneListOfLanguages,
  createOneLanguage,
  updateUserLanguageList,
  deleteOneLanguage
} =  require('./languageController')

const {languageObj} = require('../util/schemaContainer')
// const { adminMiddleware } = require('../preValiadtion/admin')
// const { staffMiddleware } = require('../preValiadtion/staff')

// const {
//     websiteMiddleware
// } = require('../preValiadtion/website')


const createOneListOfLanguagesSchema = {
    schema: {
      tags:['language'],
        params: {
          type: 'object',
          required: ['id'],
          properties:{
            id : {type:'integer'},
          }
        },
        body:{
          type:'object',
          properties:{
            languages : {
              type:'array',
              items:languageObj
            }
          }
        },
        response:{
            200:{
              type:'array',
              items:languageObj
            }
        }
      },
      // preValidation:websiteMiddleware,
      handler:createOneListOfLanguages
}

const createOneLanguageSchema = {
  schema: {
    tags:['language'],
      params: {
        type: 'object',
        required: ['id'],
        properties:{
          id : {type:'integer'},
        }
      },
      body:languageObj,
      response:{
          200:languageObj
      }
    },
    // preValidation:websiteMiddleware,
    handler:createOneLanguage
}



const updateUserLanguageListSchema = {
  schema: {
    tags:['language'],
    params: {
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
      }
    },
    body:{
      type:'object',
      properties:{
        languages : {
          type:'array',
          items:{
            type:'object',
            required:['name','level'],
            properties:{
              name:{type:'string'},
              level:{type:'integer'}
            }
          }
        }
      }
    },
    response:{
        200:{
          type:'array',
          items:languageObj
        }
    }
  },
  // preValidation:websiteMiddleware,
  handler:updateUserLanguageList
}


const deleteOneLanguageSchema = {
  schema: {
    tags:['language'],
      params: {
        type: 'object',
        required: ['id'],
        properties:{
          id : {type:'integer'},
        }
      },
      response:{
          200:languageObj
      }
    },
    // preValidation:websiteMiddleware,
    handler:deleteOneLanguage
}

module.exports = {
  createOneLanguageSchema,
  createOneListOfLanguagesSchema,
  updateUserLanguageListSchema,
  deleteOneLanguageSchema
}