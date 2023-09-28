import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn({ setmode }) {
  const navigate = useNavigate();

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
      <h2>회원가입</h2>
      <form>
        <label>ID:</label>
        <input
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
          type="password"
          name="pwCheck"
          size="20"
          value={pwCheck}
          onChange={(e) => setPwCheck(e.target.value)}
          placeholder="비밀번호를 확인해주세요"
        />
        <br />
        <input type="button" value="회원가입" onClick={handleSignin} />
      </form>
    </div>
  );
}
