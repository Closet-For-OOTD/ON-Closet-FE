import React from "react";
import axios from "axios";

export default function MainPage() {
  const callApi = async () => {
    axios.get("http://localhost:4000/").then((res) => {
      alert("등록완료?");
      console.log(res);
    });
  };

  return (
    <>
      <div>OOTD</div>
      <button type="button" onClick={callApi}>
        생성하기
      </button>
    </>
  );
}
