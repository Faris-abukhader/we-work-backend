const {
  signUpSchema,
  signInSchema,
  verifySchema,
  resendVerifyingEmailSchema,
  resetPasswordSchema,
  sendRequestForNewPasswordSchema,
} = require('./authSchema')

const authRoutes = async(fastify, options, done)=> {
  
    fastify.post('/signUp', signUpSchema)

    fastify.post('/signIn',signInSchema)

    fastify.post('/resetPasswordRequest',sendRequestForNewPasswordSchema)

    fastify.put('/resetPassword',resetPasswordSchema)

    fastify.get('/verify',verifySchema)

    fastify.get('/resendVerifyEmail/:email',resendVerifyingEmailSchema)
    
}
  
module.exports = authRoutes