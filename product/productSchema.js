const {
  createOneProduct,
  updateOneProduct,
  deleteOneProduct,
  employerRateProduct,
  getOneProductById,
  getOneFreelancerAllProducts,
  getOneEmployerAllProducts,
} =  require('./productController')

const {productObj} = require('../util/schemaContainer')
// const { adminMiddleware } = require('../preValiadtion/admin')
// const { staffMiddleware } = require('../preValiadtion/staff')

// const {
//     websiteMiddleware
// } = require('../preValiadtion/website')


const createOneProductSchema = {
    schema: {
      tags:['product'],
        body:{
          type:'object',
          required:['creatorId','requestId','content'],
          properties:{
            creatorId:{type:'integer'},
            requestId:{type:'integer'},
            content:{type:'string'},
          }
        },
        response:{
            200:productObj
        }
      },
      // preValidation:websiteMiddleware,
      handler:createOneProduct
}


const updateOneProductSchema = {
  schema: {
    tags:['product'],
    params:{
      type:'object',
      required:['id'],
      properties:{
        id:{type:'integer'},
      }
    },
    body:{
      type:'object',
      required:['content'],
      properties:{
        content:{type:'string'},
      }
    },
    response:{
        200:productObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:updateOneProduct
}

const deleteOneProductSchema = {
  schema: {
    tags:['product'],
    params: {
      type: 'object',
      required: ['id'],
      properties:{
        id : {type:'integer'},
      }
    },
    response:{
        200:productObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:deleteOneProduct
}

const employerRateProductSchema = {
  schema: {
    tags:['product'],
    params:{
      type:'object',
      required:['id'],
      properties:{
        id:{type:'integer'},
      }
    },
    body:{
      type:'object',
      required:['employerRate'],
      properties:{
        employerRate:{type:'number'},
      }
    },
    response:{
        200:productObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:employerRateProduct
}


const getOneProductByIdSchema = {
  schema: {
    tags:['product'],
    params:{
      type:'object',
      required:['id'],
      properties:{
        id:{type:'integer'},
      }
    },
    response:{
        200:productObj
    }
  },
  // preValidation:websiteMiddleware,
  handler:getOneProductById
}


const getOneFreelancerAllProductSchema = {
  schema: {
    tags:['product'],
    params:{
      type:'object',
      required:['id'],
      properties:{
        id:{type:'integer'},
      }
    },
    response: {
      200:{
        type: 'object',
        properties: {
          data:{
            type: 'array',
            item: productObj,
          },          
          pageNumber: { type: 'integer' },
        }
      }
    },
  },
  // preValidation:websiteMiddleware,
  handler:getOneFreelancerAllProducts
}


const getOneEmployerAllProductSchema = {
  schema: {
    tags:['product'],
    params:{
      type:'object',
      required:['id'],
      properties:{
        id:{type:'integer'},
      }
    },
    response: {
      200:{
        type: 'object',
        properties: {
          data:{
            type: 'array',
            item: productObj,
          },          
          pageNumber: { type: 'integer' },
        }
      }
    },
  },
  // preValidation:websiteMiddleware,
  handler:getOneEmployerAllProducts
}

module.exports = {
  createOneProductSchema,
  updateOneProductSchema,
  deleteOneProductSchema,
  employerRateProductSchema,
  getOneProductByIdSchema,
  getOneFreelancerAllProductSchema,
  getOneEmployerAllProductSchema,
}