const mongoose = require('mongoose');

const talentSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',  // Reference to the users collection
        required: true
    },
    image: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    position: {
        type: String,
        required: true
    },
    location:{
        type:String,
        enum:['Kigali','Addis Ababa','Accra','Casablanca','Cairo','Lagos','Nairobi','Johannesberg']
    },
    skills: [{
        type: String
    }],
    workHistory: [{
        position: {
            type: String,
            required: true
        },
        years: {
            type: Number,
            required: true
        },
        placeofWork: {
            type: String
        },
        dateFrom: {
            type: Date,
            required: true
        },
        dateTo: {
            type: Date
        },
        summary: {
            type: String,
            required: true
        },
        technologies: [{
            type: String
        }]
    }],
    projects: [{
        nameofProject: {
            type: String,
            // Make the name of the project optional
        },
        durationofProject: {
            type: Number
        },
        dateFrom: {
            type: Date
        },
        dateTo: {
            type: Date
        },
        summary: {
            type: String
        },
        technologies: [{
            type: String
        }]
    }],
    education: [{
        nameofDegree: {
            type: String,
            // Make the degree name optional
        },
        placeofEducation: {
            type: String,
            // Make the place of education optional
        },
        dateFrom: {
            type: Date
        },
        dateTo: {
            type: Date
        }
    }]
},{toJSON:{virtuals:true}});

talentSchema.virtual('totalYearsExperience').get(function () {
    return this.workHistory.reduce((total, job) => {
      const years = job.dateTo ? (job.dateTo.getFullYear() - job.dateFrom.getFullYear()) : 0;
      return total + years;
    }, 0);
  });

const Talent = mongoose.model('Talent', talentSchema);

module.exports = Talent;
