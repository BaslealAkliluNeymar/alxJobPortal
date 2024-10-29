const mongo = require('mongoose');
const userModel = require('./Users')
const jobSchema = new mongo.Schema({
    postedBy:{
        type:mongo.Schema.Types.ObjectId,
        ref:'users'
    },
    jobTitle: {
        type: String,
        required: true
    },
    company:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        enum:['Senior','Junior','Entry'],
        required:true,
    },
    type:{
        type:String,
        required:true,
        enum:['Fully Remote','Hybrid','On-Site']
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:[String],
        required:true
    },
    responsibilities:{
        type:[String],
        required:true
    },
    qualifications:{
        type:[String]
    },
    logo:{
        type:String
    }
});


const Job = mongo.model('jobs', jobSchema);

module.exports = Job;
