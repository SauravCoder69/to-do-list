const express = require("express");
const bodyParser = require("body-parser");



var app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

var item = [];
var example = "working"
app.get("/", function (req, res) {
    res.render("list", { ejes: item });
});

app.post("/", function (req, res) {
    var newItem = req.body.ele1;
    item.push(newItem);
    res.redirect("/");
});





app.listen(5000, function () {
    console.log("server started")
});