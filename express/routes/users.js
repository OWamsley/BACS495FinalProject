var express = require('express');
var router = express.Router();

var userDB = [
  {"username": "username", "password": "password"}
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.app.locals.db;
  var cursor = db.collection("users").find();
  console.log(cursor);
  cursor.toArray().then(c => res.json(c));

});

router.post('/:id' , function(req, res, next) {
  var db = req.app.locals.db;
  var id = req.body.id;
  var name = req.body.name;
  const query = {'id': id,
 'name' : name};
  console.log(query);
  db.collection("users")
    .findOne(query)
    .then(result =>{
      console.log(result);
      if(result == null){
        res.json(null);
      }
      else{
        res.json(result);
      }
    })
    .catch(err =>{
      console.log('Error: ${err}');
    })


});

router.post('/', async function(req, res, next) {
  var db = req.app.locals.db;
  var count = await db.collection("postCount").findOne({ counter: "user" }, {count: 1, _id: 0});
  await db.collection("postCount").updateOne({ counter: "user" }, { $inc: {count: 1}});
  var id = count.count;
  const user = {
    'id': id,
    'name': req.body.name
    }
  console.log(user);
  db.collection("users").insertOne(user);
  res.json({ id: id});

});


module.exports = router;
