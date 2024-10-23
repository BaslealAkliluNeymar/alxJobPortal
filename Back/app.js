const express = require('express')
const cors = require('cors')
const users = require('./controllers/Users.js')
const Login = require('./controllers/Login.js')
const talentRoute = require('./controllers/Talent.js')
const skillRoute = require('./controllers/Skill.js')
const app = express()

app.use(cors())
app.use(express.json())



app.get('/',(req,res) =>{
    res.send("This is a get request")
})

app.use('/login',Login)
app.use('/signup',users)
app.use('/talent',talentRoute)
app.use('/skill',skillRoute)


module.exports = app 