const mongoose = require('mongoose')

const staffInformationSchema = new mongoose.Schema({
    SNo: Number,
    name: String,
    designation: String,
    qualification: String,
    department: String,
    dob: Date,
    emailId: String,    
    contact: String,
    password: String,
    permanentAddress: String,
    stafftype: String
},
{timestamps: true}
)

const staffInformation = mongoose.model('staffInformation', staffInformationSchema)
module.exports = staffInformation;
