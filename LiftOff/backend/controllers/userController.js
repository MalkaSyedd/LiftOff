const User = require('../models/Users');

//Register new user
const registerUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        // Basic validation
        if(!firstname || !lastname || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists'});
        }

        //save user to database
        const newUser = await User.create({ firstname, lastname, email, password });
        res.status(201).json(newUser);
        console.log("User registered: ", newUser);
    }catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

//Login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        //find user
        const user = await User.find({ email, password });
        if (!user || user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        console.log("Login successful", user);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { registerUser, loginUser };
