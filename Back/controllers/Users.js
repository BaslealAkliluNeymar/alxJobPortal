const users = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/Users');

// GET users endpoint (Basic route for testing)
users.get('/', (req, res) => {
    console.log(res)
    res.send('You are at the users endpoint');

});

// POST endpoint for user registration
users.post('/', async (req, res) => {
    try {
        const { firstname, lastname, email, password, role } = req.body;

        // Check if the email already exists
        const found = await userModel.findOne({ email });
        if (found) {
            return res.status(409).json({
                message: "This email is already in use. Please try logging in!",
            });
        }

        // Hash the password before saving
        const hashPassword = await bcrypt.hash(password, 10);

        // Create a new user object
        const newUser = {
            firstname,
            lastname,
            email,
            password: hashPassword,
            role,
        };

        // Save the user in the database
        const createdUser = await userModel.create(newUser);

        res.status(201).json({
            message: "User successfully registered!",
            user: {
                firstname: createdUser.firstname,
                lastname: createdUser.lastname,
                email: createdUser.email,
                role: createdUser.role,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred during registration.",
            error: error.message,
        });
    }
});

module.exports = users;
