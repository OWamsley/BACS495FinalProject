var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.app.locals.db;
  db.collection("posts").find({}).toArray()
    .then(function(posts){

      res.json(posts);
    })
});

router.get('/comments', async function(req, res, next) {
  var db = req.app.locals.db;
  var post = await db.collection("posts").findOne({ id: req.body.id }, { comments: 1, _id: 0})
  var comments = post.comments;
  console.log("Retrieving Comments for key: "  + req.body.id);
  res.json(comments);
  
});

router.patch('/', async function(req, res, next){
  //create new comment
  const query = { id: req.body.id }
  console.log("body: " + req.body.commentBody);
  console.log("id: " + req.body.id);
  var db = req.app.locals.db;
  var comments = await db.collection("posts").findOne(query, { commentCount: 1, _id: 0});
  var comment = { "commentTitle": req.body.commentTitle, 
  "commentBody": req.body.commentBody,
  "id": comments.commentCount,
  "likes" : 0,
  "dislikes": 0,};
  
  await db.collection("posts").updateOne(query, {$push: { comments: comment }})
  await db.collection("posts").updateOne(query, {$inc: { commentCount: 1 }})
  
  res.send();
});


router.post('/', async function(req, res, next){
  var db = req.app.locals.db;
  var count = await db.collection("postCount").findOne({ counter: "postCount" }, {count: 1, _id: 0});
  
  await db.collection("postCount").updateOne({ counter: "postCount" }, { $inc: {count: 1}});


  const post = {
    "title": req.body.title,
    "category": req.body.category,
    "body": req.body.body,
    "comments":[],
    "id": count.count,
    "commentCount": 0,
    "username": req.body.username
  }
  console.log(post);

  db.collection("posts").insertOne(post);
  res.json();
})

module.exports = router;
