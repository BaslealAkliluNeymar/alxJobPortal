const admin = require('express').Router()
const userModel = require('../models/Users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Job = require('../models/jobs')

admin.get('/',async (req,res) =>{
    try{
        const auth = req.headers.authorization.split(' ')[1]
        const found = jwt.verify(auth, process.env.TOKEN_KEY)
        const user = await userModel.findOne({email:found.email})
        res.send(user)
    }
    catch(error){
        res.send({
            message:error
        })
    }
})
admin.get('/jobs',async (req,res) =>{
    try{
        const auth = req.headers.authorization.split(' ')[1]

        const found = jwt.verify(auth, process.env.TOKEN_KEY)
        const user = await userModel.findOne({email:found.email}).populate("jobsPosted")
        
        // const jobs = await Job.find({}).populate("postedBy")
        
        console.log(user)
        res.send(user)
    }
    catch(error){
        res.send({
            message:error
        })
    }
})
admin.post('/jobs',async (req,res) =>{
    try
    {
        // console.log(req.body)
        const auth = req.headers.authorization.split(' ')[1]
        
        const found = jwt.verify(auth, process.env.TOKEN_KEY)
        const user = await userModel.findOne({email:found.email})
        
        
        const newObj = {
            postedBy:user._id,
            ...req.body
        }

        const savedJob = await Job.create(newObj)

        user.jobsPosted.push(savedJob._id)

        await user.save()

        console.log(user)
        res.send(savedJob)
    }
    catch(error){
        res.send({
            message:error.message
        })
    }
})


module.exports = admin