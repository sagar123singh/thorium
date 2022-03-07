const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    balance:{
        type: Number,
        default: 100
    },
    address:String,

    gender: {
        type: String,
        enum: ["male", "female", "others"] 
    },
    age: Number,
    isFreeAppUser:{
        type: Boolean,
        default :false
    
    }
}, );

module.exports = mongoose.model('User', userSchema) 



// String, Number
// Boolean, Object/json, array