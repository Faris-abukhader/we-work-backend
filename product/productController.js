const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const {productRange} = require('../util/paginationRange')

const createOneProduct = async(req,reply)=>{
    try{     
        const {creatorId,requestId,content} = req.body      

        const newProduct = await prisma.product.create({
            data:{
                creator:{
                    connect:{
                        userId:creatorId
                    }
                },
                hiringRequest:{
                    connect:{
                        id:requestId
                    }
                },
                content
            },
        })

        reply.send(newProduct)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const updateOneProduct = async(req,reply)=>{
    try{     
        const {id} = req.params
        const {content} = req.body      

        const targetProduct = await prisma.product.update({
            where:{
                id
            },
            data:{
                content
            },
            include:{
                hiringRequest:{
                    select:{
                        job:{
                            select:{
                                id:true,
                                title:true
                            }
                        },
                        owner:{
                            select:{
                                user:{
                                    select:{
                                        firstName:true,
                                        lastName:true
                                    }
                                }
                            }
                        },
                        salary:true
                    }
                },
            }
        })

        reply.send(targetProduct)
      
    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const deleteOneProduct = async(req,reply)=>{
    try{
        const {id} = req.params

        const targetProduct = await prisma.product.delete({
            where:{
                id
            },
        })

        reply.send(targetProduct)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const employerRateProduct = async(req,reply)=>{
    try{
        const {id} = req.params
        const {employerRate} = req.body

        const targetProduct = await prisma.product.update({
            where:{
                id
            },
            data:{
                employerRate
            }
        })

        reply.send(targetProduct)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const getOneProductById = async(req,reply)=>{
    try{
        const {id} = req.params

        const targetProduct = await prisma.product.findUnique({
            where:{
                id
            },
        })

        reply.send(targetProduct)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const getOneFreelancerAllProducts = async(req,reply)=>{
    try{
        const {id} = req.params

        let pageNo = 0
        let toSkip = false
        if(req.params.pageNumber){
          pageNo = req.params.pageNumber
          toSkip = true
        }
    
        await prisma.product.count({
            where:{
               creator:{
                userId:id
               }
            }
        }).then(async(length)=>{
            const data = await prisma.product.findMany({
                where:{
                    creator:{
                        userId:id
                    }
                },
                take:productRange,
                skip:toSkip ? (pageNo-1)*productRange:0, 
                include:{
                    hiringRequest:{
                        select:{
                            job:{
                                select:{
                                    id:true,
                                    title:true
                                }
                            },
                            owner:{
                                select:{
                                    user:{
                                        select:{
                                            firstName:true,
                                            lastName:true
                                        }
                                    }
                                }
                            },
                            salary:true
                        }
                    },
                }
            })   
            reply.send({data,pageNumber:Math.ceil(length/productRange)}) 
        })

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const getOneEmployerAllProducts = async(req,reply)=>{
    try{
        const {id} = req.params

        let pageNo = 0
        let toSkip = false
        if(req.params.pageNumber){
          pageNo = req.params.pageNumber
          toSkip = true
        }
    
        await prisma.product.count({
            where:{
                hiringRequest:{
                    owner:{
                        userId:id
                    }
                }
            }
        }).then(async(length)=>{
            const data = await prisma.product.findMany({
                where:{
                    hiringRequest:{
                        owner:{
                            userId:id
                        }
                    }
                },
                take:productRange,
                skip:toSkip ? (pageNo-1)*productRange:0, 
            })   
            reply.send({data,pageNumber:Math.ceil(length/productRange)}) 
        })

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}



module.exports = {
    createOneProduct,
    updateOneProduct,
    deleteOneProduct,
    employerRateProduct,
    getOneProductById,
    getOneFreelancerAllProducts,
    getOneEmployerAllProducts,
}