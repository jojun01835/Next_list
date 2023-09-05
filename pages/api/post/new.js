import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (session) {
    req.body.author = session.user.email;
  }
  console.log(req.body);
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(500).json("제목부탁드려요🙏");
    }
    try {
      let db = (await connectDB).db("forum");
      let result = db.collection("post").insertOne(req.body);
      res.redirect(200, "/list");
    } catch (error) {
      res.redirect(400).json("오류나요 개발자 잘못임 ㅋㅋ");
    }
  }
}
