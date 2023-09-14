import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name:String,
    email:String,
    contact:Number
})

export const productModel = mongoose.model('products', productSchema)