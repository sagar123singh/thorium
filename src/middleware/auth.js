const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel");
const router = require("../routes/route");
const authenticate = function(req, req, next) {


    let token = req.headers["x-auth-token"];
    if (!token) 
  
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    console.log(token);
    
    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });
  
     
    next()
}

const authorise = function(req, res, next) {
    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    // comapre the logged in user's id and the id in request




    next()
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise