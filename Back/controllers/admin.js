const admin = require('express').Router()
const userModel = require('../models/Users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Job = require('../models/jobs')
const talent = require('../models/Talent')
admin.get('/',async (req,res) =>{
    try{
        const auth = req.headers.authorization.split(' ')[1]
        const found = jwt.verify(auth, process.env.TOKEN_KEY)
        const user = await userModel.findOne({ email:found.email })
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

admin.get('/talents',async (req,res) =>{
    try
    {
        
        const auth = req.headers.authorization.split(' ')[1]
        const found = jwt.verify(auth, process.env.TOKEN_KEY)
        const tal  = await Job.find({postedBy:found._id}).populate('students')
        const arr  = []
        for(let item of tal){
            if (item.students.length > 0){
                for (let i = 0; i < item.students.length; i++) {
                    arr.push({
                        id:item.students[i]._id,
                        jobTitle:item.jobTitle,
                        name:item.students[i].name,
                        skills:item.students[i].skills,
                        status:item.students[i].status,
                        resume:item.students[i].resume,
                        location:item.students[i].location,
                    })
                }
            }
        }
        res.send(arr)
    }
    catch(err){
        res.send({
            message:err.message
            })
    }
  
})


module.exports = admin