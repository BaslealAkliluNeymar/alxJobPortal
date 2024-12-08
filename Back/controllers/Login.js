const LoginRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userModel = require('../models/Users')

LoginRouter.post('/',async (req,res) =>{
   
    try {

            const { email, password } = req.body
            const user = await userModel.findOne({ email:email })
            
            const findPassword = await bcrypt.compare(password, user.password)
        
            if(findPassword && user){ 
                const tokenSign = {
                    _id:user._id,
                    email,
                    password
                }
                const token = jwt.sign(tokenSign, process.env.TOKEN_KEY)
                const tokenObj = {
                    _id:user._id,
                    email,
                    token,
                    role:user.role,
                    user:user.firstname
                }
                res.send(tokenObj)
            }
            else{
                res.status(401).send("Wrong Password!")
            }
        
    }
    catch (error) {
        res.status(500).send("Please Sign-up First")
    }
  
})


module.exports = LoginRouter