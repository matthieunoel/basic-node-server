// Require express and create an instance of it
var express = require('express');
var app = express();
var version = require('./../package.json').version;

// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
    res.json({
        status: "ok",
        error: "",
        version: version
    });
});

// Change the 404 message modifing the middleware
app.use(function (req, res, next) {
    res.status(404).json({
        status: "ko",
        error: "Error 404 : page not found",
        version: version
    });
});

app.use(function (req, res, next) {
    res.status(500).json({
        status: "ko",
        error: "Error 500 : server internal error",
        version: version
    });
});

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});