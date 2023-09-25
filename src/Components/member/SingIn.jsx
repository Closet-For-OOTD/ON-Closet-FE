import React, { useRef } from "react";
import axios from "axios";

export default function SignIn() {
  const idRef = useRef();
  const pwRef = useRef();
  const pwCheckRef = useRef();

  const handleSignin = () => {
    axios
      .post("/signin", {
        id: idRef.current.value,
        pw: pwRef.current.value,
        pwCheck: pwCheckRef.current.value,
      })
      .then((res) => {
        console.log(res);
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
          ref={idRef}
          placeholder="아이디를 입력하세요"
          defaultValue=""
        />
        <br />
        <label>PW:</label>
        <input
          type="password"
          name="pw"
          size="20"
          ref={pwRef}
          autoComplete="on"
          placeholder="비밀번호를 입력하세요"
          defaultValue=""
        />
        <br />
        <label>PW CHECK:</label>
        <input
          type="password"
          name="pwCheck"
          size="20"
          ref={pwCheckRef}
          placeholder="비밀번호를 확인해주세요"
          defaultValue=""
        />
        <br />
        <input type="button" value="회원가입" onClick={handleSignin} />
      </form>
    </div>
  );
}