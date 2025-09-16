// import express to create routes
const express = require('express');

// import controller functions that handle the logic for each route
// registerUser -> handles user signup
// loginUser -> handles user login
const { registerUser, loginUser } = require('../controllers/userController');

// create a new router object
const router = express.Router();

// Define API routes:

// POST /api/users/register -> register a new user
router.post('/register', registerUser);

// POST /api/users/login -> login an existing user
router.post('/login', loginUser);

// export the router to be used in server.js (or app.js)
module.exports = router;