const mongoose = require('mongoose')

const adminLoginSchema = new mongoose.Schema({
    password:{
        type: String,
        required: [true, "Please Enter Password"]
    } 
},
{
    timestamps: true
}
)

const adminLogin = mongoose.model('adminLogin', adminLoginSchema) 
module.exports = adminLogin;