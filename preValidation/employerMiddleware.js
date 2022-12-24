const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const {verify} = require('jsonwebtoken')

const employerMiddleware = async(req,res,next)=>{
    const token = req.headers.token
    let employerId = null

    if(!token) res.code(401).send({stateCode:401,message:"Unauthorized request"}) 

        
    employerId = verify(token,process.env.JWT_SECRET).id

    if(!employerId) res.code(401).send({stateCode:401,message:"Unauthorized request"}) 
  

      try{
        const targetEmployer = await prisma.employer.findUnique({
            where:{
                id:employerId,
            }
        }) 

        if(!targetEmployer) throw 'Unauthorized request.'


      }catch(err){
        console.log(err)

        res.code(401).send({stateCode:401,message:"Unauthorized request"}) 
    }     
}

module.exports = {employerMiddleware}