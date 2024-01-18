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

//---------------------------------------------------declare routes---------------------------------------------------
// api to get all staff data
app.get('/staff',async (req,res)=>{
    try{
        const staff = await staffInformation.find({});
        res.status(200).json(staff)
    }catch(error){
        res.status(500).json({message: error.message})
    }
    res.send("hello node api");
})

// api to add staff
app.post('/addStaff', async (req,res)=>{
    try{
        if(staffInformation.findOne(req.body.SNo)){
            res.status(500).json("staff already present in Database")
            return
        }
        const staff = await staffInformation.create(req.body)
        res.status(200).json(staff);
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

// api to get particular Staff
app.get('/staff/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const staff = await staffInformation.findById(id);
        if(staff === null){
            res.status(500).json("staff not present")
            return
        }
        res.status(200).json(staff)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
//--------------------------------------------------------------------------------------------------------------------

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