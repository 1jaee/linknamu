import { connection } from "next/server";
import { links } from "@/lib/links";
import { getClicksCollection } from "@/lib/mongodb";

const linkIds = new Set(links.map((link) => link.id));

export async function GET() {
  await connection();

  const clicks = await getClicksCollection();
  const docs = await clicks.find({ _id: { $in: [...linkIds] } }).toArray();
  const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));

  return Response.json(counts, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const id = (body as { id?: unknown } | null)?.id;

  if (typeof id !== "string" || !linkIds.has(id)) {
    return Response.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  const clicks = await getClicksCollection();
  const doc = await clicks.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );

  return Response.json({ id, count: doc?.count ?? 1 });
}
