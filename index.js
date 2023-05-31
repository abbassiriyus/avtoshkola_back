const express = require("express")
const app = express()
const cors = require("cors")
const fileUpload = require("express-fileupload")
const pool = require("./db.js")
const fs = require("fs")

app.use(fileUpload())
app.use(cors())
app.use(express.static("Images"))

// users
app.get("/users", (req, res) => {
    pool.query("SELECT * FROM users", (err, result) => {
        if (!err) {
            res.status(200).send(result.rows)
        } else {
            res.send(err)
        }
    })
})

app.get('/users/:id', (req, res) => {
    pool.query("SELECT * FROM users where userid=$1", [req.params.id], (err, result) => {
        if (!err) {
            res.status(200).send(result.rows)
        } else {
            res.status(400).send(err)
        }
    })
})

app.post("/users", (req, res) => {
    const body = req.body
    pool.query('INSERT INTO users (username, email,category, phone, password) VALUES ($1, $2, $3, $4,$5) RETURNING *', [body.username, body.email,body.category, body.phone, body.password], (err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(201).send("Created")
        }
    })
})

app.delete("/users/:id", (req, res) => {
    const id = req.params.id
    pool.query('DELETE FROM users WHERE userid = $1', [id], (err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send("Deleted")
        }
    })
})

app.put("/users/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
    pool.query(
        'UPDATE users SET username = $1, email = $2,category=$3 phone=$4, password=$5 WHERE userid = $6',
        [body.username, body.email,body.category, body.phone, body.password, id],
        (err, result) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send("Updated")
            }
        }
    )
})


app.get("test",(req,res)=>{
    var data=
var test=[]
for (let i = 0; i <10; i++) {    
    var key=Math.floor(Math.random() * 700)

}


})


app.listen(5000, () => {
    console.log("Localhost is Running");
})