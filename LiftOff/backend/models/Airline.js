import mongoose from "mongoose";

const AirlineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    logoUrl: { type: String },
    iataCode: { type: String, required: true },
    country: { type: String, required: true },
},
{ timestamps: true });

const Airline = mongoose.model("Airline", AirlineSchema);

export default Airline;