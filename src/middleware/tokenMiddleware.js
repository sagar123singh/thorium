const jwt = require("jsonwebtoken");
//const authorModel = require("../models/authorModel");
const authorModel=require("../models/authorModel");
const blogModel = require("../models/blogModel");


//authentication
const middle1= async function (req, res, next){
  try{
   let token =req.headers["x-api-key"];
   if (!token)
      res.status(401).send({status:false, msg:"token not avilable(authentication)"})
    console.log(token)

     
    let decodedToken = jwt.verify(token, "Sagar07-thorium");
    if (!decodedToken)
       res.status(400).send({ status: false, msg: "token is invalid" });
  
     
    next()
  }
  catch(error){
  console.log(error)
  res.status(500).send({status:false, msg:error})
  }
}


//authorise
const middle2= async function(req, res, next){
  try{
  let token =req.headers["x-api-key"];
  console.log(token)
  if (!token)
  res.status(400).send({status:false, msg:"token not valid(authorise)"})
  console.log(token)
  
  let decodedToken = jwt.verify(token, 'Sagar07-thorium')
  console.log(decodedToken)
   if(!decodedToken)
   res.status(400).send({status: false, msg:"token is not valid"})
  
   let xyz=decodedToken.userId      ////check author id
   let blogId=req.param.blogId      /////check blog id


   let blogsDetails=await blogModel.findOne(blogId)
   let authorId=blogsDetails.authorId
   console.log(authorId)
   
   if(authorId!=xyz)
   res.status(400).send({status: false, msg:" not authorize"})

   next()
   
  }
  catch(error){
  console.log(error)
  res.status(500).send({status:false, msg:error})
  }
}


module.exports.middle1=middle1

module.exports.middle2=middle2

