var express = require('express');
var router = express.Router();


var posts = [
    {"title": "mypost", "body": "something cool happened"},
    {"title": "my second post", "body": "something cool happened again today"},
    {"title": "things to ask for help with", "body": "how should user authentication happen? \n something else "},
]

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.app.locals.db;
  var posts = db.collection("posts").find();
  res.json(posts);
});

router.post('/', function(req, res, next){
  const user = {
    "title": req.body.title,
    "body": req.body.body
  }

  var db = req.app.locals.db;
  db.collection("posts").insertOne(user);
  res.send("Usernserted");

})

module.exports = router;
