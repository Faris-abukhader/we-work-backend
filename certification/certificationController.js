const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


const createOneCertification = async(req,reply)=>{
    try{     
        const {id} = req.params
        const {fromWhere,issuedDate,name,description} = req.body      

        const newCertification = await prisma.certification.create({
            data:{
                freelancer:{
                    connect:{
                        userId:id
                    }
                },
                fromWhere,
                issuedDate:new Date(issuedDate),
                name,
                description
            },
        })

        reply.send(newCertification)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const updateOneCertification = async(req,reply)=>{
    try{     
        const {id,fromWhere,issuedDate,name,description} = req.body      

        const targetCertification = await prisma.certification.update({
            where:{
              id
            },
            data:{
                fromWhere,
                issuedDate:new Date(issuedDate),
                name,
                description
            },
        })

        reply.send(targetCertification)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const deleteOneCertification = async(req,reply)=>{
    try{
        const {id} = req.params

        const targetCertification = await prisma.certification.delete({
            where:{
                id
            },
        })

        reply.send(targetCertification)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

module.exports = {
    createOneCertification,
    updateOneCertification,
    deleteOneCertification
}