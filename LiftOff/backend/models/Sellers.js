import mongoose from "mongoose";

const SellerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contactEmail: { type: String, required: true },
    phoneNumber: { type: String, required: true},
    companyName: { type: String, required: true },
},
{ timestamps: true });

const Seller = mongoose.model("Seller", SellerSchema);

export default Seller;