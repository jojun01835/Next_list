export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log(req.body);
    return res.status(200).json(req.body); // 서버 응답
  }
}