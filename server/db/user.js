const mysql = require('mysql')
const connectDb =  mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:'Shopping',
    port:3307

})


connectDb.connect(function(err) {
if (err) throw err;
console.log("Connected!");
});

module.exports = connectDb

