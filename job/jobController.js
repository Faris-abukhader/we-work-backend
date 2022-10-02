const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const {jobRange} = require('../util/paginationRange')


const createOneJob = async(req,reply)=>{
    try{     
        const {id} = req.params
        const {title,location,description,price,skillRequired,jobCategory} = req.body

        const newJob = await prisma.job.create({
           data:{
            employer:{
                connect:{
                    id
                }
            },
            title,
            location,
            description,
            price,
            skillRequired,
            jobCategory
           }
        })

        reply.send(newJob)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const updateOneJob = async(req,reply)=>{
    try{     
        const {id,title,location,description,price,skillRequired,jobCategory} = req.body

        const targetJob = await prisma.job.update({
            where:{
              id
            },
            data:{
                title,
                location,
                description,
                price,
                skillRequired,
                jobCategory    
            },
        })

        reply.send(targetJob)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const deleteOneJob = async(req,reply)=>{
    try{     
        const {id} = req.params

        const targetJob = await prisma.job.delete({
            where:{
                id
            }
        })

        reply.send(targetJob)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const getAllAvailableJob = async(req,reply)=>{
    try{

        let pageNo = 0
        let toSkip = false
        if(req.params.pageNumber){
          pageNo = req.params.pageNumber
          toSkip = true
        }
    
        await prisma.job.count({
            where:{
                isClosed:false
            }
        }).then(async(length)=>{
            const data = await prisma.job.findMany({
                where:{
                    isClosed:false
                },
                take:jobRange,
                skip:toSkip ? (pageNo-1)*jobRange:0, 
            })   
            reply.send({data,pageNumber:Math.ceil(length/jobRange)}) 
        })
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const searchJob = async(req,reply)=>{
    // list of accepted query option for searching property
    let aviableAttributes = [
        'name',
        'category',
        'location',
        'skill',
      ]
      
    try{
    
    // for pagination
    // if there is a params (pageNumber) then we activite the skip choice
    // each page has 25 records
    // we return the total number of pages with each request    
    let pageNo = 0
    let toSkip = false
    if(req.params.pageNumber){
        pageNo = req.params.pageNumber
        toSkip = true
    }
    
      // getting the query from request
      const query = req.query

      // checking the accepted query . . . 
      var queryArray = Object.entries(query).filter((item)=>aviableAttributes.indexOf(item[0].toString())!=-1) 
  
      let where = {
        isClosed:false
      }

      // if the name was in query list add it to where statement
      if (queryArray.includes('name')!=-1){
        where.title = {
            contains:query['name']
        }
      }

      // if the jobCategory was in query list add it to where statement
      if(queryArray.includes('category')!=-1){
        where.jobCategory = {
            contains:query['category']
        }
      }


      // if the jobCategory was in query list add it to where statement
      if(queryArray.includes('location')!=-1){
        where.location = {
            contains:query['location']
         }
      }


      // if the jobCategory was in query list add it to where statement
      if(queryArray.includes('skill')!=-1){
        where.skillRequired = {
            contains:query['skill']
        }
      }
        
        
      await prisma.job.count({
          where
      }).then(async(length)=>{
        let data = await prisma.job.findMany({
          where,
          take:jobRange,
          skip:toSkip ? (pageNo-1)*jobRange:0,
          
        })
        reply.send({data,pageNumber:Math.ceil(length/jobRange)})
      })
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

module.exports = {
    createOneJob,
    updateOneJob,
    deleteOneJob,
    getAllAvailableJob,
    searchJob
}