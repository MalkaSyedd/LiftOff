// starts the express server and connects to MongoDB
// register routes and middleware
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

console.log("MONGO_URI: ", process.env.MONGO_URI);
const app = express();

//Middleware
app.use(cors());
app.use(express.json());


//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB', err));

//Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});