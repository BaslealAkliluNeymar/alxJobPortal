const mongo = require('mongoose');

const skillSchema = new mongo.Schema({
    name: {
        type: String,
        required: true
    }
});

// Define the Skill model
const Skill = mongo.model('skills', skillSchema);

module.exports = Skill;
