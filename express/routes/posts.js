var express = require('express');
var router = express.Router();


var posts = [
    {"title": "mypost", "body": "something cool happened"},
    {"title": "my second post", "body": "something cool happened again today"},
    {"title": "things to ask for help with", "body": "how should user authentication happen? \n something else "},
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(posts);
});

module.exports = router;
