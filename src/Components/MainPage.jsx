import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <div>OOTD</div>
      <Link to="/upload">
        <button type="button">생성하기</button>
      </Link>
    </>
  );
}