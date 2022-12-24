const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const {verify} = require('jsonwebtoken')

const freelancerMiddleware = async(req,res,next)=>{
    const token = req.headers.token
    let freelancerId = null

    if(!token) res.code(401).send({stateCode:401,message:"Unauthorized request"}) 

        
    freelancerId = verify(token,process.env.JWT_SECRET).id

    if(!freelancerId) res.code(401).send({stateCode:401,message:"Unauthorized request"}) 
  

      try{
        const targetFreelancer = await prisma.freelancer.findUnique({
            where:{
                id:freelancerId,
            }
        }) 

        if(!targetFreelancer) throw 'Unauthorized request.'


      }catch(err){
        console.log(err)

        res.code(401).send({stateCode:401,message:"Unauthorized request"}) 
    }     
}

module.exports = {freelancerMiddleware}