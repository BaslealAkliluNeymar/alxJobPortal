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
       

        const arr = tal.flatMap(item =>
            item.students.length > 0
                ? item.students.map(student => ({
                      id: student._id,
                      jobTitle: item.jobTitle,
                      name: student.name,
                      skills: student.skills,
                      status: student.status,
                      resume: student.resume,
                      location: student.location,
                  }))
                : []
        );
        
        res.send(arr)
    }
    catch(err){
        res.send({
            message:err.message
            })
    }
  
})


admin.get('/dashboard',async(req,res)=>{  
    try{
        const auth = req.headers.authorization.split(' ')[1]
        const found = jwt.verify(auth, process.env.TOKEN_KEY)
        const tal  = await Job.find({postedBy:found._id}).populate('students')
       

        const data = tal.reduce((acc,job) => acc.concat(job.students),[])


        const newData = {
            totalStudents:data.length,
            totalPending:data.reduce((acc,start) => start.status === 'pending' && acc++,0),
            totalApproved:data.reduce((acc,start) => start.status === 'active' && acc++,0),
            totalRejected:data.reduce((acc,start) => start.status === 'rejected' && acc++,0),
            totalJobs:tal.length
        }
        
        res.send(newData)
    }
    catch(err){
        res.send({
            message:err.message
            })
    }

 })


module.exports = admin