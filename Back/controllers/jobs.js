const jobRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const userModel = require('../models/Users')
const Job = require('../models/jobs')



jobRouter.get('/', async (req,res) =>{
    try{
        const auth = req.headers.authorization.split(' ')[1]
    
        const found = jwt.verify(auth, process.env.TOKEN_KEY)
        const user = await userModel.findOne({email:found.email})

        console.log(user)
        const jobs = await Job.find({}).populate("postedBy")
        console.log(jobs)
        res.send(jobs)

    }
    catch(error){
        res.send({
            message:error
        })
    }
})


jobRouter.post('/', async (req,res) =>{
    try
    {

        const auth = req.headers.authorization.split(' ')[1]
    
        const found = jwt.verify(auth, process.env.TOKEN_KEY)
        const user = await userModel.findOne({email:found.email})
    
        // console.log(user)
       
        // if (user.role !== 'Employer') return res.send({message:"Only Employers Allowed In Here!"})
    
    
        const newObj = {
            postedBy:user._id,
            ...req.body
        }
        console.log(newObj)
        const savedJob = await Job.create(newObj)
        console.log(savedJob)
        user.jobsPosted.push(savedJob._id)
        res.send(savedJob)
    }
    catch(error){
        res.send({
            message:error.message
        })
    }
})

module.exports = jobRouter