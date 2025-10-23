import mongoose from "mongoose";

const BookingSchema = mongoose.model({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    flightId: {type: mongoose.Schema.Types.ObjectId, ref: "Flight", required: true},
    seatsBooked: {type: Number, required: true},
    totalPrice: {type: Number, required: true},
    bookingDate: {type: Date, required: true},
    status: {type: String, enum: ["pending", "confirmed", "cancelled", "delayed"], required: true},
    
},
{ timestamps: true });

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking;
