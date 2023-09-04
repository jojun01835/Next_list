export default function Login() {
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/member" method="POST">
        <input type="text" name="title" placeholder="아이디"></input>
        <input type="password" name="content" placeholder="비번"></input>
        <button type="submit">즉시가입ㅎ</button>
      </form>
    </div>
  );
}
