const express = require('express')
const cors = require('cors')
const users = require('./controllers/Users.js')
const Login = require('./controllers/Login.js')
const talentRoute = require('./controllers/talent.js')
const skillRoute = require('./controllers/Skill.js')
const jobRouter = require('./controllers/jobs.js')
const admin = require('./controllers/admin.js')
const uploaded = require('./controllers/upload.js')
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
app.use('/jobs',jobRouter)
app.use('/admin',admin)
app.use('/upload',uploaded)

module.exports = app 