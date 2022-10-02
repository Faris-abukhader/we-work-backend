const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


const createOneListOfLanguages = async(req,reply)=>{
    try{     
        const {id} = req.params
        const {languages} = req.body

        const newLanguages = await prisma.user.update({
            where:{
              id
            },
            data:{
                languageList:{
                    createMany:{
                        data:languages
                    }
                }
            },
            select:{
                languageList:true
            }
        })

        reply.send(newLanguages.languageList)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const updateUserLanguageList = async(req,reply)=>{
    try{     
        const {id} = req.params
        const {languages} = req.body

        const newLanguages = await prisma.user.update({
            where:{
              id
            },
            data:{
                languageList:{
                    deleteMany:{},
                    createMany:{
                        data:languages
                    }
                }
            },
            select:{
                languageList:true
            }
        })

        reply.send(newLanguages.languageList)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

module.exports = {
    createOneListOfLanguages,
    updateUserLanguageList,
}