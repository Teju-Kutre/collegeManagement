
const express = require("express");
const staffInformation = require('../models/staffInformation')
const router = express.Router()

//middlewares
router.use(express.json())

//api to get staff login
router.post('/login', async(req,res) => {
    const staffLogin = await staffInformation.find({emailId:req.body.emailId, password:req.body.password})
    if(staffLogin.length === 0) res.status(200).json(false)
    else res.status(200).json(true)
})

//api to get all staff information
router.get('/',async (req,res)=>{
    try{
        const staff = await staffInformation.find({});
        res.status(200).json(staff)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

// api to add staff
router.post('/add', async (req,res)=>{
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
router.get('/:email', async(req, res) => {
    try {
        const {email} = req.params;
        const staff = await staffInformation.find({emailId: email});
        if(staff === null){
            return res.status(404).json( {message: `cannot find Staff`} )
        }
        res.status(200).json(staff)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//api to update staff
router.put('/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const staff = await staffInformation.findByIdAndUpdate(id, req.body)
        if(!staff){
            return res.status(404).json({message: `Cannot find Staff`})
        }
        res.status(200).json(staff)
    }catch(error){ 
        res.status(500).json({message: error.message})
    }
})

//api to delete staff
router.delete('/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const staff = await staffInformation.findByIdAndDelete(id)
        if(!staff){
            return res.status(404).json({message: `Staff ID not present to delete`})
        }
        res.status(200).json(staff)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;