import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://krunalvaishnav2004:4V00vD7bBCz3UAzQ@cluster0.jozhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("Database Connected"));
}
