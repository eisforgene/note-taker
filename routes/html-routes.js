const app = require("express").Router(); // requires only the router function from express
const path = require('path');



app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

module.exports = app;