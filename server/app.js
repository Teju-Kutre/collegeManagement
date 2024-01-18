const express = require("express")
const mongoose = require("mongoose");
const staffInformation = require('./models/staffInformation')
const app = express()

//middlewares
app.use(express.json())

//stored my dbconnection data in .env
require('dotenv').config();
//accessing my dbconenction variable
const db_connection = process.env.DB_CONNECTION;

//declare routes
app.get('/', (req,res)=>{
    res.send("hello node api");
})

// api to add staff
app.post('/addStaff', async (req,res)=>{
    try{
        const staff = await staffInformation.create(req.body)
        res.status(200).json(staff);
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
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