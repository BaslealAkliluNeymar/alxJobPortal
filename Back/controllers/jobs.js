const jobRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const userModel = require('../models/Users')
const job = require('../models/jobs')



jobRouter.get('/', async (req,res) =>{
    try{
        const jobs = await job.find({})
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
    try{

        const { position, type, location , logo } = req.body
        const auth = req.headers.authorization.split(' ')[1]
    
        const found = jwt.verify(auth, process.env.TOKEN_KEY)
        const user = await userModel.findOne({email:found.email})
    
        
        // if (user.role !== 'Employer') return res.send({message:"Only Employers Allowed In Here!"})
    
    
        const newObj = {
            ...req.body,
            employer_id:user._id.toString()
        }
        console.log(newObj)
        const savedJob = await job.create(newObj)
        
        res.send(savedJob)
    }
    catch(error){
        res.send({
            message:error
        })
    }
})

module.exports = jobRouter