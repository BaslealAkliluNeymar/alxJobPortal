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


jobRouter.post('/:id/apply', async (req,res) =>{
    // try
    // {
        console.log(req.headers.authorization)
        const id = req.params.id
        const auth = req?.headers?.authorization?.split(' ')[1]
    
        const found = jwt.verify(auth, process.env.TOKEN_KEY)
        const user = await userModel.findOne({email:found.email})
        const jobs = await Job.findOne({_id:id})
       
        // if (user.role === 'Employer') return res.send({message:"Only Students can apply for jobs"})
        if (jobs.students.includes(user._id)) return res.send({message:"You have already applied for this job"})
        jobs.students.push(user._id)
        
        await jobs.save()
        // const newObj = {
        //     ...jobs,
        //     students:jobs.students.push(user._id)
        // }
        // console.log(jobs)
        
        res.send({
                message:"Succesfully Applied"
            }
        )
    // }
    // catch(error){
    //     res.send({
    //         message:error.message,
    //         message2:"its not working"
    //     })
    // }
})

module.exports = jobRouter