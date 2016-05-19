var express = require('express');
var app = express();

var strokes = [];

app.get('/strokes', function (req, res) {
  res.json({strokes: [2,3,456]});
});

app.get('/strokes/low', function(req, res) {
    res.json({stroke: 1});
});

// app.post

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
