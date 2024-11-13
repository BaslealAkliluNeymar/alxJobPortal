const talentRoute = require('express').Router()
const talentModel = require('../models/Talent')
const userModel = require('../models/Users')
const jwt = require('jsonwebtoken')


talentRoute.get('/',async (req,res) =>{

    try {
        const str = req.headers.authorization.split(' ')[1]
    
        const data = jwt.verify(str, process.env.TOKEN_KEY)
    
        const found = await userModel.find({email:data.email})
    
        if(found){
            const talentData = await talentModel.find({})
            res.send(talentData)
        }
        else{
            res.send({
                message:"talent"
            })
        }

    }
    catch(error){
        res.status(501).send({
            message:"malinformed"
        })
    }
    
})

talentRoute.post('/',async(req,res) =>{
    
    const data = req.body

    // console.log(data)
    const user = jwt.verify(req.headers.authorization.split(' ')[1],process.env.TOKEN_KEY)

    console.log(user)
    const found = await talentModel.find({_id:user._id})

    console.log(found)
    if(found.length === 0){
        const profileObj = {
            _id: user._id,
            ...data
        }

        console.log(profileObj)
        const savedObj = await talentModel.create(profileObj)
        console.log(savedObj)
        res.send(savedObj)
        
    }
    else{
        res.status(500).send({
            message:"Frame the Question differently"
        })
    }
})

talentRoute.get('/search',async(req,res) =>{
    const { position,location } = req.query
    
    console.log(position)
    const newPosition = new RegExp(position, "i")
    
    const positionsFound = (location === 'ALL') ? await talentModel.find({position:newPosition}):
     await talentModel.find({ position: newPosition, location: location})

    res.send(positionsFound)

})


talentRoute.post('/search',async(req,res) =>{

    try
    {
        const { role, experience, location }  = req.body
        const query = {}
        console.log(`This is the second console ${query}`)
        if (Object.keys(req.body).length === 0){
            const data =  await talentModel.find({})
            res.send(data)
        }
        else{
            if (role) query.position = role
            if (location) query.location = location
            // if (totalYearsExperience && !isNaN(totalYearsExperience)) query.totalYearsExperience = Number(totalYearsExperience);

            const allData = await talentModel.find(query)

            const filtered = experience ? allData.filter((item) =>{
                return item.totalYearsExperience === Number(experience)
            }) : allData
            
            res.send(filtered)
        }
        

    }
    catch(err){
        res.status(500).send({ error: err.message });
    }
})

talentRoute.get('/search',async(req,res) =>{
    const {position, location} = req.query
    console.log(position)
    console.log(location)

})
talentRoute.get('/:id',async (req,res) =>{
    const { id } = req.params

    console.log(req.headers.authorization)

    const str = req.headers.authorization.split(' ')[1]

    if(!str) return res.send({message:"Token Missing!"})
    const data = jwt.verify(str,process.env.TOKEN_KEY)

    const found = await userModel.find({email:data.email})

    if(found){
        const talentData = await talentModel.find({_id:id})
        res.send(talentData)
    }
    else{
        res.send({
            message:"talent"
        })
    }

})

talentRoute.post('/:id/profile',async (req,res) =>{
    try{

        const found  = jwt.verify(req.headers.authorization.split(' ')[1],process.env.TOKEN_KEY)
        const userfound = await userModel.findOne({_id:found._id})
      
        const data = req.body
        
        const newName = userfound.firstname + ' ' + userfound.lastname
      

        const newObj = {
            ...data,
            name: data.name ? data.name : newName,
            _id: found._id
        };

    
        const savedTalent = await talentModel.create(newObj)

        res.send({
            message:"Succesfully Found",
            savedTalent
        })
        
    }
    catch(error) {
        res.status(500).send({
            message:"there was a problem",
            error:error
        })
    }

})


module.exports = talentRoute