const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {

     let allBooks= await BookModel.find( ) // COUNT

 
    res.send({msg: allBooks})
}

const getBooksList= async function (req, res) {

    let allBooks= await BookModel.find().select({bookName:1,authorName:1, _id:0})

 res.send({msg: allBooks})
}



    const BooksInYear= async function (req, res) {
        let year = req.query.year
        let allBooks=await BookModel.find({year:{$eq:year}})
        res.send({msg: allBooks})
    }




    const getIndianRsBooks= async function (req, res) {
        let allBooks=await BookModel.find({     IndianPrices :{ $in: [100, 200, 500] }     })
        res.send({msg: allBooks})
    }




    const getRandomBooks= async function (req, res) {
        let allBooks=await BookModel.find({    isStockAvailable: true}).find({ totalPages: { $gt:  500 }  }) 
         res.send({msg: allBooks})
    }
   
   
   module.exports.createBook= createBook
   module.exports.getBooksData=getBooksData
   module.exports.getBooksList= getBooksList
   module.exports.BooksInYear= BooksInYear
   module.exports.getIndianRsBooks= getIndianRsBooks
   module.exports.getRandomBooks= getRandomBooks
   


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData