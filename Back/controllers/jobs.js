const jobRouter = require('express').Router();
const Job = require('../models/jobs');
const authenticate = require('../middleware/authenticate');



// Route to fetch all jobs
jobRouter.get('/', async (req, res) => {
    try {
        const jobs = await Job.find({}).populate('postedBy');
        res.send(jobs);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Route to apply for a job
jobRouter.post('/:id/apply', authenticate, async (req, res) => {
    try {
        const { id } = req.params;
        const user = req.user;

        const job = await Job.findById(id);
        if (!job) {
            return res.status(404).send({
                message: 'Job not found',
                type: 'Failed',
            });
        }

        if (user.role === 'Employer') {
            return res.status(403).send({
                message: 'Only Students can apply for jobs',
                type: 'Failed',
            });
        }

        if (job.students.includes(user._id)) {
            return res.status(400).send({
                message: 'You have already applied for this job',
                type: 'Failed',
            });
        }

        job.students.push(user._id);
        await job.save();

        res.send({
            message: 'Successfully Applied',
            type: 'Success',
        });
    } catch (error) {
        res.status(500).send({
            message: error.message,
        });
    }
});

module.exports = jobRouter;
