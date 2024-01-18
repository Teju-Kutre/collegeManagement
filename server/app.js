const express = require("express")
const mongoose = require("mongoose");
const { db } = require("./models/adminLogin");
const app = express()

//stored my dbconnection data in .env
require('dotenv').config();
//accessing my dbconenction variable
const db_connection = process.env.DB_CONNECTION;

//declare routes
app.get('/', (req,res)=>{
    res.send("hello node api");
})


//connecting to Database and 
mongoose.connect(db_connection)
.then(()=>{
    app.listen(4000, () => {
        console.log("Server Running...");
    })
    console.log("connected to mongoDb")
}).catch((error)=>{
    console.log(error)
})