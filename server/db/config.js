const mysql = require('mysql')
const connectDb =  mysql.createConnection({
        host:'localhost',
        user:"root",
        password:"",
        database:'test',
        port:3307

    })


connectDb.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });