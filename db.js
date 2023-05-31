const { Client } = require("pg")

const pool = new Client({
    user: "postgres",
    host: "containers-us-west-164.railway.app",
    database: "railway",
    password: "n24hk7ujibmLOnhfuHJq",
    port: 6060
})

pool.connect(err => {
    if(err) {
        console.log("Connect Error");
    } else {
        console.log("Connect To PostgreSql");
    }
})

module.exports = pool