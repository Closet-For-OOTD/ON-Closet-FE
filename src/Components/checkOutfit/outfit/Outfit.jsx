import React, { useState } from "react";
import axios from "axios";
import "./Outfit.css";
import Header from "../../header/Header";
import wface from "../../../assets/wface.png";
import err from "../../../assets/onerror.png";

export default function Outfit(props) {
  const userId = localStorage.getItem("userId");
  const [clickTop, setClickTop] = useState("");
  const [clickBottom, setClickBottom] = useState("");
  const [clickOuter, setClickOuter] = useState("");
  const [clickShoes, setClickShoes] = useState("");

  axios.get("/uploadOutfit").then((res) => {
    const value = res.data;
    for (let i = 0; i < value.length; i++) {
      const type = value[i].type;
      const img = value[i].img;
      const id = value[i].userId;
      if (type === "TOP" && id === userId) {
        setClickTop(img);
      } else if (type === "BOTTOM" && id === userId) {
        setClickBottom(img);
      } else if (type === "OUTER" && id === userId) {
        setClickOuter(img);
      } else if (type === "SHOES" && id === userId) {
        setClickShoes(img);
      }
    }
  });

  const handleError = (e) => {
    e.target.src = err;
  };

  return (
    <>
      <Header titlevalue="outfit-title" buttonvalue="outfit-button" />
      <div className="oufitBox">
        <div className="right-box">
          <div id="face-box">
            <img src={wface} alt="" />
          </div>
          <div id="top-box">
            <img src={clickTop} alt="" onError={handleError} />
          </div>
          <div id="bottom-box">
            <img src={clickBottom} alt="" onError={handleError} />
          </div>
          <div id="shoes-box">
            <img src={clickShoes} alt="" onError={handleError} />
          </div>
        </div>
        <div className="left-box">
          <div id="outer-box">
            <img src={clickOuter} alt="" onError={handleError} />
          </div>
        </div>
      </div>
    </>
  );
}
