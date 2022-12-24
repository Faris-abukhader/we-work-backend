const {verify} = require('jsonwebtoken')

const websiteMiddleware = async(req,res,next)=>{
    // test
    console.log('website request is comming')
    console.log(req.headers.token)
    const token = req.headers.token
    let website_secret = null


    if(!token) res.code(401).send({stateCode:401,message:"Unauthorized request"})  

        
    website_secret = verify(token,process.env.JWT_SECRET).website_secret


    if(!website_secret) res.code(401).send({stateCode:401,message:"Unauthorized request"}) 

}

module.exports = {websiteMiddleware}
