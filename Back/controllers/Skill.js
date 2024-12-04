const skillRoute = require('express').Router()
const skillModel  = require('../models/Skill')

skillRoute.get('/',async (req,res) =>{
    const talent = await skillModel.find({})
    res.send(talent)
})

module.exports = skillRoute