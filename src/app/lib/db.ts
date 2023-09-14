import mongoose from "mongoose";
const Url = "mongodb+srv://school:student123@cluster0.64833pk.mongodb.net/store?retryWrites=true&w=majority";
export const connect = mongoose.connect(Url)