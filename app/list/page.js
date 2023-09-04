import Link from "next/link";
import { connectDB } from "/util/database";

export default async function List(pros) {
  const client = await connectDB;
  const db = client.db("forum"); //
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((res, i) => {
        return (
          <div className="list-item" key={i}>
            <div>
              <Link href={"/detail/" + result[i]._id}>
                <h4>{res.title}</h4>
              </Link>
              <p>{res.content}</p>
              <p>1월1일</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
