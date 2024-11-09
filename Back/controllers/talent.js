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

talentRoute.get('/search',async(req,res) =>{
    const { position,location } = req.query
    console.log(position)
    console.log(location)
    const positionsFound = await talentModel.find({ position: position, location: location})

    res.send(positionsFound)

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