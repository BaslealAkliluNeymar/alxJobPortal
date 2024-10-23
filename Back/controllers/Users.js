const users = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userModel  = require('../models/Users')

users.get('/', (req,res) =>{
    res.send('You are at the users endpoint')
})

users.post('/', async(req,res) =>{
    
    try{

        const { firstname, lastname, email, password, role } = req.body
        
       
        const found = await userModel.findOne({email:email})
        if (found){
            res.send({
                message:"This email is already user, try logging in!"
            })
        }
        const hashPassword = await bcrypt.hash(password,10)
    
        const newObj = {
            ...req.body,
            password:hashPassword
        }
        const created = await userModel.create(newObj);
    
        res.status(201).json({
            message: "User Credentials Successfully Saved!",
            user: newObj
        });
    }catch (error){
         res.status(500).send('Error Found');
    }
})


module.exports = users