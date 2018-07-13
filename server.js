var express = require("express");
var bodyParser = require("body-parser");
// on cats youtube
var methodOverride = require("method-override");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
// from cats video
// app.use(express.static(process.cwd() * "/public"));
app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var router = require("./controllers/burgers_controller.js");

app.use(router);

app.listen(PORT, function() {
    console.log("Burgers now listening at localhost:" + PORT);
});