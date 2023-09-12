import React from "react";
import "./Closet.css";

export default function Closet() {
  return (
    <>
      <div className="wrap">
        <div className="title">
          <span className="title-box">TOP</span>
          <span className="title-box"> BOTTOM</span>
          <span className="title-box">OUTER</span>
          <span className="title-box">SHOES</span>
        </div>
        <div className="box">
          <span className="close-box TOP">dd</span>
          <span className="close-box BOTTOM">dd</span>
          <span className="close-box OUTER">dd</span>
          <span className="close-box SHOES">dd</span>
        </div>
        <div className="button">
          <button type="button">착용</button>
          <button type="button">삭제</button>
          <button type="button">취소</button>
        </div>
      </div>
    </>
  );
}
