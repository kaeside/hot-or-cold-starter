var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var userScores = [8, 6, 7, 5, 3, 0, 9];

app.get('/scores', function (req, res) {
    res.json(userScores);
});

app.get('/winner', function (req, res) {

    Array.min = function( array ){
        return Math.min.apply( Math, array );
    };

    var winRar = Array.min(userScores);

    res.json(winRar);
});

app.post('/scores', function(req, res) {

    console.log(req);

    if (!req.body) {
        return res.sendStatus(400);
    }

    userScores.push(parseInt(req.body.score));


    res.status(201).json(userScores);
});

app.listen(process.env.PORT || 8081);