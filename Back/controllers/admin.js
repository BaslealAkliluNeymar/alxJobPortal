const admin = require('express').Router();
const Job = require('../models/jobs');
const authenticate = require('../middleware/authenticate');




admin.get('/', authenticate, (req, res) => {
    res.send(req.user);
});

admin.get('/jobs', authenticate, async (req, res) => {
    try {
        const user = await req.user.populate('jobsPosted');
        res.send(user);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

admin.post('/jobs', authenticate, async (req, res) => {
    try {
        const newJob = { postedBy: req.user._id, ...req.body };
        const savedJob = await Job.create(newJob);
        req.user.jobsPosted.push(savedJob._id);
        await req.user.save();
        res.send(savedJob);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

admin.get('/talents', authenticate, async (req, res) => {
    try {
        const jobs = await Job.find({ postedBy: req.user._id }).populate('students');
        const talents = jobs.flatMap(job =>
            job.students.map(student => ({
                id: student._id,
                jobTitle: job.jobTitle,
                name: student.name,
                skills: student.skills,
                status: student.status,
                resume: student.resume,
                location: student.location,
            }))
        );
        res.send(talents);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

admin.get('/dashboard', authenticate, async (req, res) => {
    try {
        const jobs = await Job.find({ postedBy: req.user._id }).populate('students');
        const students = jobs.flatMap(job => job.students);
        const dashboardData = {
            totalStudents: students.length,
            totalPending: students.filter(s => s.status === 'pending').length,
            totalApproved: students.filter(s => s.status === 'active').length,
            totalRejected: students.filter(s => s.status === 'rejected').length,
            totalJobs: jobs.length,
        };
        res.send(dashboardData);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = admin;
