import React, { useState } from "react";
import axios from "axios";
import "./Outfit.css";

export default function Outfit(props) {
  const [clickTop, setClickTop] = useState("");
  const [clickBottom, setClickBottom] = useState("");
  const [clickOuter, setClickOuter] = useState("");
  const [clickShoes, setClickShoes] = useState("");

  axios.get("/uploadOutfit").then((res) => {
    const value = res.data;
    for (let i = 0; i < value.length; i++) {
      const type = value[i].type;
      const img = value[i].img;
      if (type === "TOP") {
        setClickTop(img);
      } else if (type === "BOTTOM") {
        setClickBottom(img);
      } else if (type === "OUTER") {
        setClickOuter(img);
      } else {
        setClickShoes(img);
      }
    }
  });

  return (
    <>
      <div className="oufitBox">
        <div className="right-box">
          <div id="face-box">
            FACE
            <img src="" alt="" />
          </div>
          <div id="top-box">
            <img value="TOP" src={clickTop} alt="" />
          </div>
          <div id="bottom-box">
            <img src={clickBottom} alt="" />
          </div>
          <div id="shoes-box">
            <img src={clickShoes} alt="" />
          </div>
        </div>
        <div className="left-box">
          <div id="outer-box">
            <img src={clickOuter} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
