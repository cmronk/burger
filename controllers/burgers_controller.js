var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers/insertOne", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function () {
        // res.json({ id: res.insertId });
        res.redirect("/burgers");

    });
});

router.put("/burgers/updateOne/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    // console.log(req.params.id);
    // console.log("condition", condition);

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
