import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/effemark';

// Debug: Log the MongoDB URI being used
console.log('🔍 MongoDB URI:', MONGODB_URI ? MONGODB_URI.substring(0, 20) + '...' : 'Not set');
console.log('🔍 Environment check:', {
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_URI_EXISTS: !!process.env.MONGODB_URI,
  MONGODB_URI_LENGTH: process.env.MONGODB_URI?.length || 0
});

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    // Check if we have a valid MongoDB URI
    if (!MONGODB_URI || MONGODB_URI === 'mongodb://localhost:27017/effemark') {
      console.log('⚠️ Using default MongoDB URI - check your .env.local file');
      console.log('💡 Make sure MONGODB_URI is set in .env.local');
    }

    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000, // Increased timeout for cloud databases
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('✅ Connected to MongoDB at:', MONGODB_URI.substring(0, 30) + '...');
      return mongoose;
    }).catch((error) => {
      console.error('❌ MongoDB connection error:', error.message);
      console.log('🔍 Attempted to connect to:', MONGODB_URI);
      console.log('💡 To fix this:');
      console.log('   1. Check your .env.local file has MONGODB_URI');
      console.log('   2. Verify the MongoDB URI is correct');
      console.log('   3. For MongoDB Atlas: Check network access and credentials');
      console.log('   4. For local MongoDB: Start MongoDB service');
      throw error;
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log('✅ MongoDB connected successfully');
  } catch (e) {
    cached.promise = null;
    console.error('❌ MongoDB connection failed:', e instanceof Error ? e.message : String(e));
    throw e;
  }

  return cached.conn;
}

export default connectDB;