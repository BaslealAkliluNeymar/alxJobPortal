require('dotenv').config()
const app = require('./app')
const mongo = require('mongoose')


mongo.connect('mongodb://localhost:27017/alxjobportal')
    .then(() =>(
        console.log('Succesfully connected')
    ))
    .catch(() =>{
        console.log('Connection Unsuccessful')
    })

mongo.set('strictPopulate', false);

const PORT = process.env.PORT || 3001

app.listen(PORT || 3001,() =>{
    console.log('Connected')
})

