const { Client } = require("pg")

const pool = new Client({
    user: "postgres",
    host: "localhost",
    database: "uchebniy",
    password: "abbas123",
    port: 6666
})

pool.connect(err => {
    if(err) {
        console.log("Connect Error");
    } else {
        console.log("Connect To PostgreSql");
    }
})

module.exports = pool