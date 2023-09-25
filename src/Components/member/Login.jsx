import React, { useRef } from "react";
import axios from "axios";

export default function Login() {
  const idRef = useRef();
  const pwRef = useRef();
  const handleClick = () => {
    axios
      .post("/login", {
        id: idRef.current.value,
        pw: pwRef.current.value,
      })
      .then((res) => {
        console.log(res);
        if (res.data.isLogin === "True") {
          alert("로그인되었습니다");
          // ! 여기 생각 -> 메인 페이지로 이동
        } else {
          alert(res.data.isLogin);
          idRef.current.value = "";
          pwRef.current.value = "";
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>ID </label>
        <input type="text" name="id" placeholder="아이디" ref={idRef} />
        <br />
        <label>PW </label>
        <input type="password" name="pw" placeholder="비밀번호" ref={pwRef} />
        <br />
        <input type="button" value="로그인" onClick={handleClick} />
      </form>
    </div>
  );
}
