var express = require("express");
var path = require("path");
var session = require("express-session");
var app = express();


app.use(express.static(path.join(__dirname, "Tehnici-web")));

// Handle 404 errors
app.use(function(req, res, next) {
    res.status(404).sendFile(path.join(__dirname, "Tehnici-web", "404.html"));
});

app.listen(5000, function() {
    console.log("A pornit serverul pe http://localhost:5000");
});