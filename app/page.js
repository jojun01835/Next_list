import Image from "next/image";
import { connectDB } from "/util/database";
import styles from "./page.module.css";
import { MongoClient } from "mongodb";

export const revalidate = 60;

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum"); //
  let a = await db.collection("post").find().toArray(); //post 콜렉션의 내용을 ArrayType으로 보여주세용

  return <div>안녕</div>;
}
