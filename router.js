const express = require('express');
//const exprouter = express.Router();

express.router.get('/', function(req,res){
    res.send("the get route on all routes");
});
express.router.post("/", function(req,res){
    res.send("Post on all routes")
});

module.export = router;