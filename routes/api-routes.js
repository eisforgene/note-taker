const app = require("express").Router(); // requires only the router function from express
const fs = require('fs');
let db = require('../db/db.json');


app.get("/api/notes", function (req, res) {
    db = JSON.parse(fs.readFileSync("./db/db.json"))
    console.log("GET", db)
    res.json(db)
})

app.post("/api/notes", function (req, res) {
    const save = {
        id: Math.floor(Math.random() * 1202),
        title: req.body.title,
        text: req.body.text

    }
    db.push(save)
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function (err, result) {
        if (err) throw err;
    })
    console.log("POST", db)
    res.json(db)
})

app.delete("/api/notes/:id", function (req, res) {
    let data = []
    for(let i=0;i<db.length;i++){
        if(db[i].id != req.params.id){
            data.push(db[i])
        }
    }
    db=data
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function (err, result) {
        if (err) throw err;
    })
    console.log("DELETE", db)
    res.json(db)
})

module.exports = app;