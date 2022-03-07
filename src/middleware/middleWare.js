
const isFreeAppUser=function(req,res,next){
let data= req.headers["isFreeAppUser"]
if(data  !== undefined){
    res.send ("resquest is missing")}
    next()
}


module.exports.isFreeAppUser=isFreeAppUser