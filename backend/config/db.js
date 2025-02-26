import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://chethant:04022006@cluster0.dbo4v.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}



//mongodb+srv://chethant:04022006@cluster0.dbo4v.mongodb.net/?