const express = require('express');

const router = express.Router();
router.route('/', function(req,res){
    res.send("the get route on all routes");
});
router.post("/", function(req,res){
    res.send("Post on all routes")
});

module.exports = router;