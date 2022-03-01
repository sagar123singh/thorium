const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const BookModel=require("../models/bookModel")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.get("/getBooksList", BookController.getBooksList)

router.post("/BooksInYear", BookController.BooksInYear)

//  router.get("/getIndianRsBook", BookController.getIndianRsBook)

router.get("/getRandomBooks", BookController.getRandomBooks)


module.exports = router;