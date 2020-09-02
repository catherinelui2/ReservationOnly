var express = require("express");
var path = require("path");
var data = require("./data.js");
var tables = require("./tables.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes

// Basic route that sends the user first to the AJAX Page
app.get("/form", function (req, res) {
    res.sendFile(path.join(__dirname, "public/form.html"));
});

app.get("/views", function (req, res) {
    res.sendFile(path.join(__dirname, "public/views.html"));
});
app.get("/api/data", function (req, res) {
    return res.json(data);
});

app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

app.post("/api/data", function (req, res) {
    var newData = req.body;

    console.log(newData);

    data.push(newData);

    res.json(newData);
});

app.post("/api/tables", function (req, res) {
    var newTables = req.body;

    console.log(newTables);

    tables.push(newTables);

    res.json(newTables);
});


app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
