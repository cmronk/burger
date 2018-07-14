var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function () {
        // res.json({ id: res.insertId });
        res.redirect("/");
    });
});

router.post("/burgers/:id", function (req, res){
    var condition = " id =" + req.params.id;
    console.log("condition", condition);
    burger.updateOne({ devoured: req.body.devoured }, condition, function(){
        res.redirect("/burgers");
    });
});
module.exports = router;