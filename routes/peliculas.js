var express = require('express');
var repo = require("../peliculasRepo")
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   //res.send('respond with a resource');
  
// res.send(repo.repo.getById(res.params.id));
 
// });


router.get('/:id', function(req, res, next) {
  //res.send('respond with a resource');
  
res.send(repo.repo.getById(req.params.id));
 
});



router.post("/", function(req, res, next){
  res.send('respond with a resource');
});

module.exports = router;
