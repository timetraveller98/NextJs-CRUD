import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name:String,
    weight:Number,
    price:Number
})

export const productModel = mongoose.models.items || mongoose.model('items', productSchema) 