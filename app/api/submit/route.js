import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { mongodbConnection } from "@/../../app/lib/db";
import { addproperty } from "./../../lib/model/product";

export async function GET() {
  try {
    await mongoose.connect(mongodbConnection);
    console.log("it is working");
    const data = await addproperty.find();
    return NextResponse.json({ data });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { success: false, message: error },
      { status: 400 }
    );
  }
}
export async function POST(request) {
  const payload = await request.json();
  console.log("payload", payload);
  await mongoose.connect(mongodbConnection);
  let product = new addproperty(payload);
  const result = await product.save();
  return NextResponse.json({ result, success: true });
}
