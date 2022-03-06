const { append } = require("express/lib/response");
const moment =require( 'moment')

const midWare = function(req,res,next){
    let date= moment().format('MM DD YYYY , hh:mm:ss')

    let ip=req.ip;
    let URL = req.originalUrl
    console.log(date,ip);

    next()
}

module.exports.midWare=midWare;