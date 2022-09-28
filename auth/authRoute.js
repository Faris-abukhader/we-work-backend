const {
  signUpSchema,
  signInSchema,
} = require('./authSchema')

const authRoutes = async(fastify, options, done)=> {
  
    fastify.post('/signUp', signUpSchema)

    fastify.post('/signIn',signInSchema)

    // fastify.post('/staff/signIn',staffSignInSchema)

    // fastify.post('/resetPasswordRequest',sendRequestForNewPasswordSchema)

    // fastify.put('/resetPassword',resetPasswordSchema)

    // fastify.get('/verify',verifyShema)

    
}
  
  module.exports = authRoutes