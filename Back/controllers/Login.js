const LoginRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/Users');

LoginRouter.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).send({ message: 'Email and password are required' });
        }

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({ message: 'User not found. Please sign up first.' });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({ message: 'Incorrect password' });
        }

        // Generate JWT token
        const tokenPayload = {
            _id: user._id,
            email: user.email,
        };
        const token = jwt.sign(tokenPayload, process.env.TOKEN_KEY, { expiresIn: '1d' });

        // Respond with token and user info
        res.send({
            _id: user._id,
            email: user.email,
            token,
            role: user.role,
            firstname: user.firstname,
        });
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
});

module.exports = LoginRouter;
