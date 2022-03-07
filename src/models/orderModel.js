const mongoose = require('mongoose');
const ObjectId= mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    user: {type: ObjectId,ref: newUser},
    product: {type: ObjectId,ref: newProduct},
amount: Number,
isFreeAppUser: {
    type :Boolean,
    default:true
}, 
date: {
    type:String,
    default: "06/03/2022"
}

}) 

module.exports = mongoose.model('Order', orderSchema)