import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Outfit.css";
import Modal from "./Modal";

export default function Outfit() {
  const [clothes, setClothes] = useState("");
  const [modal, setModal] = useState(false);
  const [clothId, setClothId] = useState("");

  // Modal에서 button을 클릭한 경우
  const [clickTop, setClickTop] = useState("");

  useEffect(() => {
    try {
      axios.get("/list").then((data) => setClothes(data));
    } catch (e) {}
  }, []);

  return (
    <>
      {/* <div className="wrap">
        <div className="box">
          <div className="top">d</div>
          <div className="bottom">d</div>
          <div className="outer">d</div>
          <div className="shoes">d</div>
        </div>
      </div> */}

      <div className="box">
        <span className="close-box TOP">
          {clothes.data?.map((cloth) =>
            cloth.type === "TOP" ? (
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
                    clickTop={setClickTop}
                  />
                ) : null}
              </div>
            ) : (
              ""
            )
          )}
        </span>

        <span className="close-box BOTTOM">
          {clothes.data?.map((cloth) =>
            cloth.type === "BOTTOM" ? (
              <div key={cloth.id + cloth.type}>
                <img
                  src={cloth.img}
                  alt="cloth"
                  value={cloth.id}
                  onClick={() => {
                    setClothId(cloth.id);
                  }}
                />
                {clothId === cloth.id ? <Modal /> : null}
              </div>
            ) : (
              ""
            )
          )}
        </span>
        <span className="close-box OUTER">
          {clothes.data?.map((cloth) =>
            cloth.type === "OUTER" ? (
              <div key={cloth.id + cloth.type}>
                <img
                  src={cloth.img}
                  alt="cloth"
                  value={cloth.id}
                  onClick={() => {
                    setClothId(cloth.id);
                  }}
                />
                {clothId === cloth.id ? <Modal /> : null}
              </div>
            ) : (
              ""
            )
          )}
        </span>
        <span className="close-box SHOES">
          {clothes.data?.map((cloth) =>
            cloth.type === "SHOES" ? (
              <div key={cloth.id + cloth.type}>
                <img
                  src={cloth.img}
                  alt="cloth"
                  value={cloth.id}
                  onClick={() => {
                    setClothId(cloth.id);
                  }}
                />
                {clothId === cloth.id ? <Modal /> : null}
              </div>
            ) : (
              ""
            )
          )}
        </span>
      </div>
      <div className="oufitBox">
        <div className="right-box">
          <div id="face-box">
            FACE
            <img src={clickTop} />
          </div>
          <div id="top-box">
            TOP
            <img value="TOP" src="" />
          </div>
          <div id="bottom-box">
            BOTTOM
            <img src="" />
          </div>
          <div id="shoes-box">
            SHOES
            <img src="" />
          </div>
        </div>
        <div className="left-box">
          <div id="outer-box">
            <img src="" />
          </div>
        </div>
      </div>
    </>
  );
}
