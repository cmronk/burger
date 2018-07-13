// requiring our dependencies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// our landing page
router.get("/", function (req, res) {
    res.redirect("/burgers");
});

// to view all
router.get("/burgers", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

// to add a burger
router.post("/burgers/insertOne", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function () {
        res.redirect("/burgers");

    });
});

// to change from 'ready to eat' to devoured
router.put("/burgers/updateOne/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.updateOne({
        devoured: true
    }, condition, function () {
        res.redirect("/burgers");
        if (res.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
