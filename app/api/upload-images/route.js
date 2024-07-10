import mongoose from "mongoose";
import { mongodbConnection } from "@/app/lib/db";
import ImageDetailsScehma from "@/app/imagescehma/imagedetail";
export const revalidate = 0;
import { NextResponse } from "next/server";
import { Readable } from "stream";
let client = null;
let bucket = null;

async function connectToDb() {
  if (client) {
    return { client, bucket };
  }

  await mongoose.connect(mongodbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client = mongoose.connection;

  // use mongoose connection
  const db = mongoose.connection;
  bucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "images",
  });

  console.log("Connected to the Database");
  return { client, bucket };
}

export const POST = async (req) => {
  const { client, bucket } = await connectToDb();

  //   const newItem = new Posts({ name: "hloe", imageUrl: "image" });
  //   await newItem.save();
  let name;
  let image;
  const formData = await req.formData();
  for (const entries of Array.from(formData.entries())) {
    const [key, value] = entries;
    if (key == "name") {
      name = value;
    }

    if (typeof value == "object") {
      image = Date.now() + value.name;
      console.log("done");
      const buffer = Buffer.from(await value.arrayBuffer());
      const stream = Readable.from(buffer);
      const uploadStream = bucket.openUploadStream([]);
      await stream.pipe(uploadStream);
    }
  }
  const newItem = new ImageDetailsScehma({
    name,
    imageUrl: image,
  });
  await newItem.save();

  return NextResponse.json({ msg: "ok" });
};

export const GET = async () => {
  const { client, bucket } = await connectToDb();

  const posts = await ImageDetailsScehma.find({});
  // console.log(await Posts.find({}));
  return NextResponse.json(posts);
};
export default connectToDb;

// import { NextResponse } from "next/server";
// import { promises as fs } from "fs"; // Use promises from fs for async/await
// import path from "path"; // To handle file paths safely

// export async function POST(req) {
//   try {
//     // Extract form data from the request
//     const data = await req.formData();

//     // Get all files from the form data (assuming they are provided under the "files" field)
//     const files = data.getAll("files[]");

//     console.log("files", data);
//     console.log("files", files);

//     // Check if any files are provided
//     if (files.length === 0) {
//       return NextResponse.json({
//         message: "No files uploaded",
//         success: false,
//       });
//     }

//     // Iterate over each file
//     for (const file of files) {
//       // Convert the file to a Buffer
//       const byteData = await file.arrayBuffer();
//       const buffer = Buffer.from(byteData);

//       // Define the path to save the file, ensuring it's a safe and correct path
//       const filePath = path.join(
//         process.cwd(),
//         "public",
//         "uploads",
//         "images",
//         file.name
//       );

//       // Write the file to the specified path
//       await fs.writeFile(filePath, buffer);
//     }

//     // Respond with success message for all files
//     return NextResponse.json({
//       message: "Files uploaded successfully",
//       success: true,
//     });
//   } catch (error) {
//     console.error("File upload error:", error);

//     // Respond with an error message
//     return NextResponse.json({
//       message: "Error uploading files",
//       success: false,
//       error: error.message,
//     });
//   }
// }
