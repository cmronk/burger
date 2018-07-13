// requiring dependencies for our app
var express = require("express");
var bodyParser = require("body-parser");

// setting PORT to process.env.PORT for heroku else use 8080
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// requiring routers created in controllers
var router = require("./controllers/burgers_controller.js");

app.use(router);


app.listen(PORT, function() {
    console.log("Burgers now listening at localhost:" + PORT);
});