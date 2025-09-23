import { MongoClient } from "mongodb";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = `mongodb+srv://satyatyagi:LpXUYZcU72j9U8qj@cluster0.8hsqtg4.mongodb.net/effemark`;
if (!uri) {
  // Intentionally do not throw here to keep import side-effects safe in build-time.
  // Handlers using this helper should validate and error clearly if missing.
}

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient> | undefined =
  global._mongoClientPromise;

if (!clientPromise) {
  client = new MongoClient(uri || "");
  clientPromise = client.connect();
  global._mongoClientPromise = clientPromise;
}

export async function getMongoClient(): Promise<MongoClient> {
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }
  return clientPromise!;
}

export function getDbName(): string {
  return process.env.MONGODB_DB || "effemark";
}
