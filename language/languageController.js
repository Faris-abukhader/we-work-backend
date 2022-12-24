const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


const createOneLanguage = async(req,reply)=>{
    try{     
        const {id} = req.params
        const {name,level} = req.body

        const newLanguages = await prisma.language.create({
            data:{
                user:{
                    connect:{
                        id
                    }
                },
                name,
                level
            },
        })

        reply.send(newLanguages)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

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

const deleteOneLanguage = async(req,reply)=>{
    try{
        const {id}  = req.params
        const targetLanguage = await prisma.language.delete({
            where:{
                id
            }
        })
        reply.send(targetLanguage)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

module.exports = {
    createOneLanguage,
    createOneListOfLanguages,
    updateUserLanguageList,
    deleteOneLanguage,
}