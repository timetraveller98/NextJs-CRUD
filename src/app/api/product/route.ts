import { productModel } from "@/app/lib/schemaModel/product";
import  {connect} from "@/app/lib/db";
import { NextResponse } from "next/server";


// POST API

export async function POST(request:any) {
    const payload =await request.json();
    await connect;
    let item = new productModel(payload);
    const data = await item.save();
    return NextResponse.json({data,success:true})}

// GET API

export async function GET() {
    let data:any = [];
    let success = true;
    try{
      await connect;
   data = await productModel.find();
    } catch(err){
      data ={err}
      success = false
    }
    return NextResponse.json({data, success})}



