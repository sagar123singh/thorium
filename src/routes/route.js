const obj = require('./loggers')
//const obj1 = require('../loggerFolder/logger')
const obj2 = require('../util/helper')
const obj3= require('../validator/formatter')
const obj4= require('../validator/formatter')
const_=require("lodash")
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {

    console.log(_.chunk(['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec'], 4));
    console.log(_.tail([1,3,5,7,9,11,13,15,17,19,21]))
    console.log(_.fromPairs([["horror","the shinning"],["thriller","shutterIsland"],["fantasy","parisLabrynth"]]));
    obj.printMessage('thorium')
    console.log(obj.url)
   //obj1.welcome('welcome')
    obj2.helper('helper')
    obj3.trim()
    obj4.convert()
    res.send('My first ever api! of the week!')
});

router.get('/bye',function(req,res){
    res.send('hello there! hi')
})
module.exports = router;