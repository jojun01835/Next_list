import Link from "next/link";
import { connectDB } from "/util/database";
import ListItem from "./ListItem";

export const dynamic = "force-dyamic";

export default async function List(pros) {
  const client = await connectDB;
  const db = client.db("forum"); //
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
