import { MongoClient } from "mongodb";

export type ClickDoc = {
  _id: string;
  count: number;
};

const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

function getClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
  }
  // 개발 모드의 HMR이나 서버리스 재사용 시 연결이 계속 늘어나지 않도록 하나만 만들어 재사용한다
  globalForMongo._mongoClientPromise ??= new MongoClient(uri).connect();
  return globalForMongo._mongoClientPromise;
}

export async function getClicksCollection() {
  const client = await getClient();
  return client.db().collection<ClickDoc>("clicks");
}
