

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const Fastify = require('fastify')
const PORT = process.env.PORT || 4500
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const fastify = Fastify({ logger: true })
const { docOptions } = require('./util/docGenerator')
// const { sendEmail } = require('./util/emailConfig/sendInBlue')


const buildUpDocs = async (options) => {
  await fastify.register(require('@fastify/swagger'), options)
}
buildUpDocs(docOptions)


fastify.register(require('@fastify/cors',{
  origin:'*'
}))

// routes
fastify.register(require('./auth/authRoute'), { prefix: '/auth' })
fastify.register(require('./freelancer/freelancerRoute'), { prefix: '/freelancer' })
fastify.register(require('./employer/employerRoute'), { prefix: '/employer' })
fastify.register(require('./language/languageRoute'), { prefix: '/language' })
fastify.register(require('./education/educationRoute'), { prefix: '/education' })
fastify.register(require('./certification/certificationRoute'), { prefix: '/certification' })
fastify.register(require('./employmentHistory/employmentHistoryRoute'), { prefix: '/employmentHistory' })
fastify.register(require('./job/jobRoute'), { prefix: '/job' })
fastify.register(require('./proposal/proposalRoute'), { prefix: '/proposal' })
fastify.register(require('./hiringRequest/hiringRequestRoute'), { prefix: '/hiringRequest' })
fastify.register(require('./product/productRoute'), { prefix: '/product' })
fastify.register(require('./conversation/conversationRoute'), { prefix: '/conversation' })
fastify.register(require('./message/messageRoute'), { prefix: '/message' })


const start = async () => {
  try {
    await fastify.listen({ port: PORT, host: '0.0.0.0' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()




const generateWebsiteToken = () => {
  const token = jwt.sign({ website_secret: process.env.WEBSITE_SECRET }, process.env.JWT_SECRET)
  console.log(token)
}
// generateWebsiteToken()


// sendEmail([{email:'faresraed2011@yahoo.com'}],'verify',process.env.API_URL,token='faklhrfkehrjk',`${'fares' + ' ' + 'raed'}`)


const createManyJob = async (req, reply) => {
  const data = await prisma.employer.update({
    where: {
      id: 1
    },
    data: {
      jobList: {
        createMany: {
          data: fakeData
        }
      }
    }
  })
}

const createEmployer = async(req,reply)=>{
  try{
    const randomId = Math.ceil(Math.random()*100+5)
    const token = jwt.sign({id:randomId},process.env.JWT_SECRET)
    const password = bcrypt.hashSync('12345', 10);  
    const employer = await prisma.user.create({
      data:{
        id:randomId,
        email:'employer@yahoo.com',
        password,
        firstName:'FaRiS',
        lastName:'abukhader',
        token,
        accountType:'e',
        isVerified:true,
        verifiedDate:new Date(),
        employer:{
          create:{}
        }
      }
  
    })
    console.log(employer)
  
  }catch(err){
    console(err)
  }
}

const createFreelancer = async(req,reply)=>{
  try{
    const randomId = Math.ceil(Math.random()*100+5)
    const token = jwt.sign({id:randomId},process.env.JWT_SECRET)
    const password = bcrypt.hashSync('12345', 10);  
    const freelancer = await prisma.user.create({
      data:{
        id:randomId,
        email:'freelancer@yahoo.com',
        password,
        firstName:'obada',
        lastName:'abukhader',
        token,
        accountType:'f',
        isVerified:true,
        verifiedDate:new Date(),
        freelancer:{
          create:{
            hourlyPrice:10,
            weeklyWantingHour:35,
            aboutMe:'JavaScript lover',
          }
        }
      }
  
    })
    console.log(freelancer)
  
  }catch(err){
    console(err)
  }
}
// createEmployer()
// createFreelancer()
// createManyJob()
