var path = require("path");

var express = require("express");
var apiPackage = require("./www/api/package.js")
// console.log(apiPackage)
var router = express.Router();
router.get("/api/package",function(req,res){
    res.jsonp(apiPackage);
})



module.exports = router;