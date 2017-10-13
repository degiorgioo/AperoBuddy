// Retrieve
var MongoClient = require('mongodb').MongoClient;
var express = require('express');

// app init
const app = express();


app.use('/', express.static(__dirname + '/dist'));

//namics/beverages
app.get('/', function (req, res) {
  res.sendFile('index.html', { root: './dist' });
});


//namics/beverages
app.get('/namics/beverages', function (req, res) {
  MongoClient.connect("mongodb://localhost:27017/namics", function (err, db) {
    db.collection('beverages').find({}).toArray(function(err, data){
      res.send(data);
    });
  });
});

app.listen(9000);
