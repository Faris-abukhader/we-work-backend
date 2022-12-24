const Fastify = require('fastify')
const fastify = Fastify()
const {   
    userObj,
    freelancerObj,
    employerObj,
    languageObj,
    educationObj,
    certificationObj,
    employmentHistoryObj,
    jobObj,
    proposalObj,
    transactionObj,
    hiringRequestObj,
    productObj,
    conversationObj,
    messageObj,
    changePasswordRequestObj
  } = require('./schemaContainer')
  

const docOptions = {
    routePrefix: '/doc',
    swagger: {
      info: {
        title: 'WeWork Api End Point',
        description: 'Testing the WeWork API',
        version: '0.1.0'
      },
      host: 'localhost',
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'auth', description: 'authentication related end-points' },
        { name: 'employer', description: 'employer related end-points' },
        { name: 'hiring Request', description: 'employer hiring request related end-points' },
        { name: 'freelancer', description: 'freelancer related end-points' },
        { name: 'certification', description: 'freelancer certification related end-points' },
        { name: 'education', description: 'freelancer certification related end-points' },
        { name: 'employment History', description: 'freelancer employment history related end-points' },
        { name: 'job', description: 'job history related end-points' },
        { name: 'product', description: 'product history related end-points' },
        { name: 'proposal', description: 'proposal history related end-points' },
        { name: 'language', description: 'language history related end-points' },
        { name: 'conversation', description: 'conversation history related end-points' },
      ],
      definitions: {
        User:userObj,
        freelancer:freelancerObj,
        employer:employerObj,
        language:languageObj,
        education:educationObj,
        certification:certificationObj,
        employmentHistory:employmentHistoryObj,
        job:jobObj,
        proposal:proposalObj,
        transaction:transactionObj,
        hiringRequest:hiringRequestObj,
        product:productObj,
        conversation:conversationObj,
        message:messageObj,
        changePasswordRequest:changePasswordRequestObj
      
      },
    },
    uiConfig: {
      docExpansion: 'none',
      deepLinking: false
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    exposeRoute: true,
    defaultModelsExpandDepth: 1 
  }
    
module.exports = {docOptions}