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

router.patch('/' ,function(req, res, next){
  var db = req.app.locals.db;
  db.collections("posts").updateOne({ _id: req.body._id }, 
    { $push: {"comments": {"comment": req.body.comment, "likes":0, "dislikes": 0}}});
})

router.post('/', function(req, res, next){
  const post = {
    "title": req.body.title,
    "body": req.body.body,
    "comments":[],
  }

  var db = req.app.locals.db;
  db.collection("posts").insertOne(post);

})

module.exports = router;
