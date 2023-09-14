import {connect} from '@/app/lib/db'
import { productModel } from '@/app/lib/schemaModel/product';
import { NextResponse } from "next/server";


// PUT API

export async function PUT(request:any, content:any) {
    const productId = content.params.productid;
   const filter = {_id:productId}
   const payload =await request.json();
   await connect;
   const data = await productModel.findOneAndUpdate(filter,payload)
    return NextResponse.json({data, success:true})}



//SINGLE ITEM GET API

export async function GET(request:any, content:any) {
    const productId = content.params.productid;
   const record = {_id:productId}
   await connect;
   const data = await productModel.findById(record)
    return NextResponse.json({data, success:true})}


// DELETE API

export async function DELETE(request:any, content:any) {
    const productId = content.params.productid;
   const record = {_id:productId}
   await connect;
   const data = await productModel.deleteOne(record)
    return NextResponse.json({data})}