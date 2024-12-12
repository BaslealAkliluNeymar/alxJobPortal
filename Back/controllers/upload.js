const uploaded = require('express').Router();
const multer = require('multer');
const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: "drdyhlgxj",
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_KEY,
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => {
        if (file.mimetype.startsWith('image')) {
            return {
                folder: 'profile_images', // Folder for images
                format: 'png', // Image format
                public_id: file.originalname, // Public ID for image
            };
        } else if (file.mimetype === 'application/pdf') {
            return {
                folder: 'resumes', 
                format: 'pdf', 
                public_id: file.originalname.replace(/\s+/g, '_').replace(/[()]/g, ''), // Simplify filename
                resource_type: 'raw',
            };
        } else {
            throw new Error('Unsupported file type');
        }
    },
});

const uploads = multer({ storage });

uploaded.post('/', uploads.single('file'), (req, res) => {
    res.send({
        url: req.file.path
    });
});

uploaded.post('/resume', uploads.single('resume'), (req, res) => {
    console.log(req.file)
    res.send({
        url: req.file.path
    });
});

module.exports = uploaded;
