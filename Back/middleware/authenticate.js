const userModel = require('../models/Users');
const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    try {
        const auth = req.headers.authorization?.split(' ')[1];
        if (!auth) throw new Error('Authorization token missing');
        const decoded = jwt.verify(auth, process.env.TOKEN_KEY);
        req.user = await userModel.findOne({ email: decoded.email });
        if (!req.user) throw new Error('User not found');
        next();
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
};


module.exports = authenticate
