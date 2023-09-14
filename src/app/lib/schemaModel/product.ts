import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name:String,
    email:String,
    contact:Number
})

export const productModel = mongoose.models.products || mongoose.model('products', productSchema) 