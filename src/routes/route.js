const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController =require("../controllers/publisherController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", authorController.createAuthor  )
// router.get("/getAuthorsData", authorController.getAuthorsData)
// router.post("/createBook", bookController.createBook  )
// router.get("/getBooksData", bookController.getBooksData)
// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)




router.post('/createAuthor', authorController.createAuthor)

router.post('/createBook', bookController.createBook);
// // router.get('/getBook', booksController.getBook)
router.post('/createPublisher', publisherController.createPublisher)
router.get('/getBooks',  bookController.getBooks  );



module.exports = router;