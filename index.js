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
    pool.query('INSERT INTO users (username, email,category, phone, password,videotoken,passportser,position_category,passportnumber) VALUES ($1, $2, $3, $4,$5,$6,$7,$8,$9) RETURNING *', [body.username, body.email,body.category, body.phone, body.password,body.videotoken,body.passportser,body.position_category,body.passportnumber], (err, result) => {
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
        'UPDATE users SET username = $1, email = $2,category=$3, phone=$4, password=$5,videotoken=$6,passportser=$7,position_category=$8,passportnumber=$9 WHERE userid = $10',
        [body.username, body.email, body.category, body.phone, body.password, body.videotoken, body.passportser, body.position_category, body.passportnumber, id],
        (err, result) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send("Updated")
            }
        }
    )
})

//test
app.get("/test",(req,res)=>{
    var data=JSON.parse(fs.readFileSync("./test/uzlotin.json","utf-8"))
var test=[]
for (let i = 0; i <10; i++) {    
    var key=Math.floor(Math.random() * 700)
test.push(data[key])
}
res.status(200).send(test)
})


// User_Test
app.get("/user_test", (req, res) => {
    pool.query("SELECT * FROM user_test", (err, result) => {
        if (!err) {
            res.status(200).send(result.rows)
        } else {
            res.send(err)
        }
    })
})

app.get('/user_test/:id', (req, res) => {
    pool.query("SELECT * FROM user_test where user_testid=$1", [req.params.id], (err, result) => {
        if (!err) {
            res.status(200).send(result.rows)
        } else {
            res.status(400).send(err)
        }
    })
})

app.post("/user_test", (req, res) => {
    const body = req.body
    pool.query('INSERT INTO user_test (userid, result1) VALUES ($1, $2) RETURNING *', [body.userid, body.result1], (err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(201).send("Created")
        }
    })
})

app.delete("/user_test/:id", (req, res) => {
    const id = req.params.id
    pool.query('DELETE FROM user_test WHERE user_testid = $1', [id], (err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send("Deleted")
        }
    })
})

app.put("/user_test/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
    pool.query(
        'UPDATE user_test SET userid = $1, result1 = $2 WHERE user_testid = $3',
        [body.userid, body.result1,id],
        (err, result) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send("Updated")
            }
        }
    )
})


// video
app.get("/video", (req, res) => {
    pool.query("SELECT * FROM video", (err, result) => {
        if (!err) {
            res.status(200).send(result.rows)
        } else {
            res.send(err)
        }
    })
})

app.get('/video/:id', (req, res) => {
    pool.query("SELECT * FROM video where videoid=$1", [req.params.id], (err, result) => {
        if (!err) {
            res.status(200).send(result.rows)
        } else {
            res.status(400).send(err)
        }
    })
})

app.post("/video", (req, res) => {
    const body = req.body
    pool.query('INSERT INTO video (video_link, video_title,category) VALUES ($1, $2,$3) RETURNING *', [body.video_link, body.video_title,body.category], (err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(201).send("Created")
        }
    })
})

app.delete("/video/:id", (req, res) => {
    const id = req.params.id
    pool.query('DELETE FROM video WHERE videoid = $1', [id], (err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send("Deleted")
        }
    })
})

app.put("/video/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
    pool.query(
        'UPDATE video SET video_link = $1, video_title = $2, category=$3 WHERE videoid = $4',
        [body.video_link, body.video_title,body.category, id],
        (err, result) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send("Updated")
            }
        }
    )
})

// news
app.get("/news", (req, res) => {
    pool.query("SELECT * FROM news", (err, result) => {
        if (!err) {
            res.status(200).send(result.rows)
        } else {
            res.send(err)
        }
    })
})

app.get('/news/:id', (req, res) => {
    pool.query("SELECT * FROM news where newsid=$1", [req.params.id], (err, result) => {
        if (!err) {
            res.status(200).send(result.rows)
        } else {
            res.status(400).send(err)
        }
    })
})

app.post("/news", (req, res) => {
    const body = req.body
    pool.query('INSERT INTO news (news_desc, news_title) VALUES ($1, $2) RETURNING *', [body.news_desc, body.news_title], (err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(201).send("Created")
        }
    })
})

app.delete("/news/:id", (req, res) => {
    const id = req.params.id
    pool.query('DELETE FROM news WHERE newsid = $1', [id], (err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send("Deleted")
        }
    })
})

app.put("/news/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
    pool.query(
        'UPDATE news SET news_desc = $1, news_title = $2 WHERE newsid = $3',
        [body.news_desc, body.news_title,id],
        (err, result) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send("Updated")
            }
        }
    )
})

app.get('/contact/', (req, res) => {
    pool.query("SELECT * FROM contact", (err, result) => {
        if (!err) {
            res.status(200).send(result.rows)
        } else {
            res.send(err)
        }
    })
})

app.post("/contact", (req, res) => {
    const body = req.body
    pool.query('INSERT INTO contact (contact_name, contact_nomer,contact_email) VALUES ($1, $2, $3) RETURNING *', [body.contact_name, body.contact_nomer,body.contact_email], (err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(201).send("Created")
        }
    })
})

app.delete("/contact/:id", (req, res) => {
    const id = req.params.id
    pool.query('DELETE FROM contact WHERE contactid = $1', [id], (err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send("Deleted")
        }
    })
})

app.put("/contact/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
    pool.query(
        'UPDATE contact SET contact_name = $1, contact_nomer = $2,contact_email = $3 WHERE contactid = $4',
        [body.contact_name, body.contact_nomer, body.contact_email,id],
        (err, result) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send("Updated")
            }
        }
    )
})

app.get('/book', (req, res) => {
    pool.query("SELECT * FROM book", (err, result) => {
        if (!err) {
            res.status(200).send(result.rows)
        } else {
            res.status(400).send(err)
        }
    })
})
app.get('/book/:id', (req, res) => {
    pool.query("SELECT * FROM book where bookid=$1", [req.params.id], (err, result) => {
        if (!err) {
            res.status(200).send(result.rows)
        } else {
            res.status(400).send(err)
        }
    })
})
app.post('/book', (req, res) => {
    const body = req.body
    var datenew = new Date().toISOString()
    const { book_file } = req.files;
    var rendom = Math.floor(Math.random() * 10000000);
    var img2 = rendom + book_file.name.slice(book_file.name.lastIndexOf('.'));
    book_file.mv(__dirname + '/Images/' + img2);
    console.log(img2);
    pool.query("insert into book (book_file,book_title, syscreatedatutc) values ($1, $2, $3)",
        [img2,body.book_title,datenew], (err, result) => {
            if (!err) {
                res.status(201).send("Created")
            } else {
                res.status(400).send(err)
            }
        })
})
app.delete('/book/:id', (req, res) => {
    pool.query("SELECT * FROM book where bookid=$1", [req.params.id], (err, result) => {
      if (result.rows.length>0) {
        if (!err) {
            fs.unlink(`./Images/${result.rows[0].book_file}`, function (err) {
                if (err && err.code == 'ENOENT') {
                    console.info("File doesn't exist, won't remove it.");
                } else if (err) {
                    console.error("Error occurred while trying to remove file");
                } else {
                    console.info(`removed`);
                }
            });
        } else {
            res.status(400).send(err)
        }
      }
    })

    pool.query("DELETE FROM book WHERE bookid=$1", [req.params.id], (err, result) => {
        if (!err) {
            if (result.rowCount === 1) {
              
                res.status(200).send("Deleted")
            } else {
                res.status(400).send("Id not found")
            }
        } else {
            res.status(400).send(err)
        }
    })
})
app.put('/book/:id', (req, res) => {

    pool.query("SELECT * FROM book where bookid=$1", [req.params.id], (err, result) => {
        const { book_file }=req.files
        if (result.rows.length>0) {
          if (!err){
              book_file.mv(__dirname + '/Images/' + result.rows[0].book_file);
          } else {
              res.status(400).send(err)
          }
        }
      })
    var datenew = new Date().toISOString()
    pool.query("SELECT * FROM book where bookid=$1", [req.params.id], (err, result) => {
        if (result.rows.length>0) {
          if (!err) {
              fs.unlink(`./Images/${result.rows[0].book_file}`, function (err) {
                  if (err && err.code == 'ENOENT') {
                      console.info("File doesn't exist, won't remove it.");
                  } else if (err) {
                      console.error("Error occurred while trying to remove file");
                  } else {
                      console.info(`removed`);
                  }
              });
          } else {
              res.status(400).send(err)
          }
        }
      })
    const body = req.body
    pool.query(`UPDATE book SET book=$1 ,syschangedatutc=$3 WHERE bookid=$2`,
        [body.book, req.params.id, datenew], (err, result) => {
            if (!err) {
                if (result.rowCount === 1) {
                    res.status(200).send("Updated")
                } else {
                    res.status(400).send("Id not found")
                }
            } else {
                res.status(400).send(err)
            }
        })
})

app.listen(5000, () => {
    console.log("Localhost is Running");
})