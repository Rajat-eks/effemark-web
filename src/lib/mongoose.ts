import mongoose from "mongoose";

export async function connectMongoose(): Promise<typeof mongoose> {
  const uri = `mongodb+srv://satyatyagi:LpXUYZcU72j9U8qj@cluster0.8hsqtg4.mongodb.net/effemark`;
  if (!uri) throw new Error("MONGODB_URI is not set");

  if (mongoose.connection.readyState === 1) return mongoose;
  if (mongoose.connection.readyState === 2) return mongoose; // connecting

  await mongoose.connect(uri, {
    dbName: process.env.MONGODB_DB || "effemark",
  });
  return mongoose;
}


