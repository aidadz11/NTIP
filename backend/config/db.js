import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://Aida:Arminrian25@cluster0.jjitufj.mongodb.net/flower_del').then(()=>console.log("DB Connected"));
}