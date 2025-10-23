// starts the express server and connects to MongoDB
// register routes and middleware


import dotenv from "dotenv"; // Load environment variables from .env file

//import dependencies
import express from "express"; //Web framework for Node.js
import { connectDB } from "./lib/db.js"
import cors from "cors"; //Middleware to allow cross-origin requests
import userRoutes from "./routes/userRoutes.js";

console.log("MONGO_URI: ", process.env.MONGO_URI); // Log the MongoDB URI to verify it's loaded correctly
dotenv.config();
const app = express();

//Middleware
app.use(cors()); //Enable CORS (Cross-Origin Resource Sharing) so frontend can communicate with backend

app.use(express.json()); //Parse incoming JSON requests and put the parsed data in req.body



//Prefix all user-related routes with /api/users
// Example: POST /api/users/register
app.use('/api/users', userRoutes);

//start server
const PORT = process.env.PORT || 5000; //Use port from environment or default to 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
