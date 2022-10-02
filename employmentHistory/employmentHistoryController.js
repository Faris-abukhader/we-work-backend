const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


const createOneEmploymentHistory = async(req,reply)=>{
    try{     

        const {id} = req.params
        const {companyName,country,city,position,fromDate,untilDate,description} = req.body

        const newEmploymentHistory = await prisma.employmentHistory.create({
            data:{
                freelancer:{
                    connect:{
                        userId:id
                    }
                },
                companyName,
                position,
                country,
                city,
                fromDate:new Date(fromDate),
                untilDate:new Date(untilDate),
                description,
            },
        })

        reply.send(newEmploymentHistory)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const updateOneEmploymentHistory = async(req,reply)=>{
    try{     
        const {id,companyName,country,position,city,fromDate,untilDate,description} = req.body

        const targetEmploymentHistory = await prisma.employmentHistory.update({
            where:{
              id
            },
            data:{
                companyName,
                country,
                position,
                city,
                fromDate:new Date(fromDate),
                untilDate:new Date(untilDate),
                description,
            },
        })

        reply.send(targetEmploymentHistory)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const deleteOneEmploymentHistory = async(req,reply)=>{
    try{     
        const {id} = req.params

        const targetEmploymentHistory = await prisma.employmentHistory.delete({
            where:{
              id
            }
        })

        reply.send(targetEmploymentHistory)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


module.exports = {
    createOneEmploymentHistory,
    updateOneEmploymentHistory,
    deleteOneEmploymentHistory
}