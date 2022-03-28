var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.app.locals.db;
  db.collection("posts").find({}).toArray()
    .then(function(posts){

      console.log(posts); 
      res.json(posts);
    })
});

router.post('/', function(req, res, next){
  const post = {
    "title": req.body.title,
    "body": req.body.body
  }

  var db = req.app.locals.db;
  db.collection("posts").insertOne(post);
  res.send("User inserted");

})

module.exports = router;
