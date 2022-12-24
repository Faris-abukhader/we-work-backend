const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


const createOneEducation = async(req,reply)=>{
    try{     
        const {id} = req.params
        const {schoolName,dateAttend,dateGraduate,areaOfStudy,degree,description} = req.body      

        const newEducation = await prisma.education.create({
            data:{
                freelancer:{
                    connect:{
                        userId:id
                    }
                },
                schoolName,
                dateAttend:new Date(dateAttend),
                dateGraduate:new Date(dateGraduate),
                areaOfStudy,
                degree,
                description
            },
        })

        reply.send(newEducation)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const updateOneEducation = async(req,reply)=>{
    try{     
        const {id,schoolName,dateAttend,dateGraduate,areaOfStudy,degree,description} = req.body

        const targetEducation = await prisma.education.update({
            where:{
              id
            },
            data:{
                schoolName,
                dateAttend:new Date(dateAttend),
                dateGraduate:new Date(dateGraduate),
                areaOfStudy,
                degree,
                description
            },
        })

        reply.send(targetEducation)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const deleteOneEductaion = async(req,reply)=>{
    try{
        const {id} = req.params

        const targetEducation = await prisma.education.delete({
            where:{
                id
            },
        })

        reply.send(targetEducation)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

module.exports = {
    createOneEducation,
    updateOneEducation,
    deleteOneEductaion
}