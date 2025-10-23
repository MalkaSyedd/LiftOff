import mongoose from "mongoose";

const FlightSchema = new mongoose.Schema({
    flightNumber: {type: String, required: true},
    description: {type: String, required: true},
    origin: {type: String, required: true},
    destination: {type: String, required: true},
    departureTime: {type: Date, required: true},
    arrivalTime: {type: Date, required: true},
    price: {type: Number, required: true},
    seatsAvailable: {type: Number, required: true},

    
},
{ timestamps: true });
const Flight = mongoose.model("Flight", FlightSchema);

export default FlightSchema;