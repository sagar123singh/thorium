const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})


router.get('/movies', function(req,res){
    const movies =["tarzan","wanted","Gadar","Sholay","pushpa"]
    res.send(movies)
})


router.get('movies/:index', function(req,res){
 const index= req.params.index
    const movies=["tarzan","wanted","Gadar","Sholay","pushpa"]
    if(index>movies.length){
        res.send("use a valid index")
    }else{
        res.send(movies[index-1])
    }
})


router.get('/moviez', function (req,res){
    const moviez=[ {id: 1,name: 'the shininig'},{id: 2,name: 'incendies'},{id: 3,name: 'idiots'},{id: 4,name: 'rang de basanti'}]
res.send(moviez)
})


router.get('/moviez/:moviezId', function (req,res){
    const moviezId=req.params.filmId
    const moviez=[ {id: 1,name: 'the shininig'},{id: 2,name: 'incendies'},{id: 3,name: 'idiots'},{id: 4,name: 'rang de basanti'}]
    if(moviezId>moviez.length){
        res.send("no movie exists with this Id")
    }else{
        res.send(moviez[moviezId-1])
    }
})

module.exports = router;
