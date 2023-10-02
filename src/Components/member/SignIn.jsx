import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import axios from "axios";

export default function SignIn({ setmode }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");

  const handleSignin = () => {
    axios
      .post("/signin", {
        id: id,
        pw: pw,
        pwCheck: pwCheck,
      })
      .then((res) => {
        if (res.data.isSuccess === "True") {
          alert("회원가입이 완료되었습니다.");
        } else {
          alert(res.data.isSuccess);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <h1 className="title-signin">ON-Closet</h1>
      <h2>회원가입</h2>
      <form>
        <label>ID:</label>
        <input
          className="signin"
          type="text"
          name="id"
          size="20"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디를 입력하세요"
        />
        <br />
        <label>PW:</label>
        <input
          className="signin"
          type="password"
          name="pw"
          size="20"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          autoComplete="on"
          placeholder="비밀번호를 입력하세요"
        />
        <br />
        <label>PW CHECK:</label>
        <input
          className="signin"
          type="password"
          name="pwCheck"
          size="20"
          value={pwCheck}
          onChange={(e) => setPwCheck(e.target.value)}
          placeholder="비밀번호를 확인해주세요"
        />
        <br />
        <input
          className="btn-signin"
          type="button"
          value="회원가입"
          onClick={handleSignin}
        />
        <p>
          로그인하시겠습니까?
          <Link to="/">
            <input
              className="btn-login-insignin"
              type="button"
              value="로그인"
            />
          </Link>
        </p>
      </form>
    </div>
  );
}
