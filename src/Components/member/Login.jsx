import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login({ setLog }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const checkLoginClick = () => {
    axios.post("/login", { id: id, pw: pw }).then((res) => {
      console.log(res);
      if (res.data.isLogin === "True") {
        alert("로그인 성공");
        setLog("MainPage");
      } else {
        alert("로그인실패");
      }
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>ID </label>
        <input
          type="text"
          name="id"
          placeholder="아이디"
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <label>PW </label>
        <input
          type="password"
          name="pw"
          placeholder="비밀번호"
          onChange={(e) => setPw(e.target.value)}
        />
        <br />
        <input type="button" value="로그인" onClick={checkLoginClick} />
      </form>

      <p>
        계정이 없으신가요?
        <Link to="/signin">
          <button>회원가입</button>
        </Link>
      </p>
    </div>
  );
}
