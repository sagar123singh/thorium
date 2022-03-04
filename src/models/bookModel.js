const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema =  mongoose.Schema( {
    name: String,
    Author: {
        type: ObjectId,
        ref: "Author"
    },
    price: Number,
    ratings: Number,
    Publisher: {
        type: ObjectId,
        ref: "Publisher"
    },
    isHardCover: {
        type:Boolean,
        default: false
    }


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
