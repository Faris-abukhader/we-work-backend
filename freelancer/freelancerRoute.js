const {
  getOneFreelancerByEmailSchema,
  getOneFreelancerByIdSchema,
  updateFreelancerInfoSchema,
  getAllFreelancerSchema,
  freelancerStaticsSchema,
  setWeeklyWantingHourSchema,
  updateFreelancerAboutMeSchema,
  updateFreelancerAvatarSchema
} = require('./freelancerSchema')

const freelancerRoutes = async(fastify, options, done)=> {

    fastify.get('/:id', getOneFreelancerByIdSchema)
  
    fastify.get('/email/:email', getOneFreelancerByEmailSchema)

    fastify.get('/statics/:id', freelancerStaticsSchema)

    fastify.get('/all/:pageNumber?', getAllFreelancerSchema)

    fastify.put('/weeklyHour/:id',setWeeklyWantingHourSchema)

    fastify.put('/aboutMe/:id',updateFreelancerAboutMeSchema)

    fastify.put('/avatar/:id',updateFreelancerAvatarSchema)

    fastify.put('/:id',updateFreelancerInfoSchema)
    
}
  
module.exports = freelancerRoutes