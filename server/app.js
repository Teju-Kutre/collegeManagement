const express = require("express")
const mongoose = require("mongoose");
// const staffInformation = require('./models/staffInformation')
const app = express()
const cors = require('cors');


//middlewares
app.use(express.json())
app.use(cors());


//stored my dbconnection data in .env
require('dotenv').config();
//accessing my dbconenction variable
const db_connection = process.env.DB_CONNECTION;

const staffRoute = require("./routes/staff");
app.use('/staff', staffRoute);

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