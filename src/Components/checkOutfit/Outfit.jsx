import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Outfit.css";
import Modal from "../Modal";

export default function Outfit() {
  const [clothes, setClothes] = useState("");
  // ? 버튼 창 열리는 기준점
  const [clothId, setClothId] = useState("");

  // ? Modal에서 button을 클릭한 경우
  const [clickTop, setClickTop] = useState("");
  const [clickBottom, setClickBottom] = useState("");
  const [clickOuter, setClickOuter] = useState("");
  const [clickShoes, setClickShoes] = useState("");

  function showCloth(value) {
    return clothes.data?.map((cloth) =>
      cloth.type === value ? (
        <div key={cloth.id + cloth.type}>
          <img
            src={cloth.img}
            alt="cloth"
            value={cloth.id}
            onClick={() => {
              setClothId(cloth.id);
            }}
          />
          {clothId === cloth.id ? (
            <Modal
              id={cloth.id}
              type={cloth.type}
              image={cloth.img}
              save={saveImage}
            />
          ) : null}
        </div>
      ) : (
        ""
      )
    );
  }

  useEffect(() => {
    try {
      axios.get("/list").then((data) => setClothes(data));
    } catch (e) {
      console.log(e);
    }
  }, []);

  const saveImage = (imageId, imageType, imageFile) => {
    try {
      const { data } = axios.post("/uploadOutfit", {
        value: { id: imageId, type: imageType, img: imageFile },
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

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
      <div className="box">
        <span className="close-box TOP">{showCloth("TOP")}</span>
        <span className="close-box BOTTOM">{showCloth("BOTTOM")}</span>
        <span className="close-box OUTER">{showCloth("OUTER")}</span>
        <span className="close-box SHOES">{showCloth("SHOES")}</span>
      </div>
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
