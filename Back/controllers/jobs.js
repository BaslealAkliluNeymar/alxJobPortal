const jobRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const userModel = require('../models/Users')
const Job = require('../models/jobs')



jobRouter.get('/', async (req,res) =>{
    try{
        // const auth = req.headers.authorization.split(' ')[1]
    
        // const found = jwt.verify(auth, process.env.TOKEN_KEY)
        // const user = await userModel.findOne({email:found.email})

        // console.log(user)
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


jobRouter.post('/:id/apply', async (req,res) =>{
    try
    {

        const { id }= req.params

        const auth = req?.headers?.authorization?.split(' ')[1]

        const found = jwt.verify(auth, process.env.TOKEN_KEY)
        const user = await userModel.findOne({email:found.email})
        if(!user) return res.send({
                message:"User not found",
                type:"Failed"
            })
        const jobs = await Job.findOne({_id:id})
        if(!jobs) return res.send({
            message:"Job not found",
            type:"Failed"
        })
       


        if (user.role === 'Employer') return res.send({
                message:"Only Students can apply for jobs",
                type:"Failed"
            })
        if (jobs.students.includes(user._id)) return res.send({
            message:"You have already applied for this job",
            type:"Failed"
        })
        jobs.students.push(user._id)
        await jobs.save()
       
        res.send(
            {   
                message:"Succesfully Applied",
                type:"Success"
            }
        )
    }
    catch(error){
        res.send({
            message:error.message,
            message2:"its not working"
        })
    }
})

module.exports = jobRouter