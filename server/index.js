const express = require('express');
const cors = require('cors');
const app = express();
require('./db/config')
const User = require("./db/user")


app.use(express.json())
app.use(cors({
    origin: '*'
}));

app.post("/register", async (req, res) => {
    let user =req.body
   await User.query("INSERT INTO users SET ?", user,(err,result,fiels)=>{
        if(err){res.send("error occour")}
        else{
            res.send(user)
        }

    })
    
})

app.post("/login",async (req, res)=>{
    console.log(req.body);
let user=await  User.findOne(req.body).selecr(-password);
res.send(user)
})
 


app.listen(4000);