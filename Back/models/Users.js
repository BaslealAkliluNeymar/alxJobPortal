const mongo = require('mongoose')

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const userSchema = new mongo.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        required:true,
        type:String,
        length:8
    },
    role:{
        type:String,
        enum:['Employer','Professional']
    },
    talent:{
        type:mongo.Schema.Types.ObjectId,
        ref:'Talent'
    },
    jobsPosted:[{type:mongo.Schema.Types.ObjectId ,ref:'jobs'}],
        
})

const userModel = new mongo.model('users',userSchema)

module.exports = userModel


