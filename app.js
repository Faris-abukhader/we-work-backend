

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const Fastify = require('fastify')
const PORT = process.env.PORT || 4500
const jwt = require('jsonwebtoken')
const fastify = Fastify({
  logger: true
})


fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

const start = async () => {
try {
    await fastify.listen({ port: PORT ,host:'0.0.0.0'})
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}
}
start()


const generateWebsiteToken = ()=>{
  const token = jwt.sign({website_secret:process.env.WEBSITE_SECRET},process.env.JWT_SECRET)
  console.log(token)
  //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3ZWJzaXRlX3NlY3JldCI6IiQyYiQxMCRwSzNvd2lLRmpmd09VZzByV1VmaW0uWUpqQW1wLmNWNXRuR1FVME5WTS5FQm9lREZ0by5aaSQyYiQxMCQ5cUpRMFNKcURtT01ONy9ZZWl6NkhlNE9keERMVUxrMmtyLndTVTJEZVl2UFdocGllYUdKQyIsImlhdCI6MTY2NDE3MjQ5Nn0.weOSiONZuVxUjP6P1Nf_4vp5rvrOflc4L3hBqcz5X6s
}
// generateWebsiteToken()

