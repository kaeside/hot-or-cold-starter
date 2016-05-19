var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var strokes = [];

app.get('/strokes', function(req, res) {
    res.json({
        strokes: strokes
    });
    //imported strokes vairable, res.send(strokes variable to json)
});

app.post('/strokes',function(req,res){
    console.log('EXPRESS SERVER BODY', req.body);
    strokes.push(req.body.score);
    res.sendStatus(200);
});

app.get('/strokes/low', function(req, res) {
    // how do we log lowest value in array?
    res.json({
        stroke: 1
    });
});


// app.post


app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
