const mongo = require('mongoose');

const jobSchema = new mongo.Schema({
    position: {
        type: String,
        required: true
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
    logo:{
        type:String
    }
});


const Job = mongo.model('jobs', jobSchema);

module.exports = Job;
