import React, { useEffect, useState } from "react";
import axios from "axios";
import MyModal from "../../modal/MyModal";

import "./Closet.css";

import { ImageList, ImageListItem } from "@mui/material";

export default function Closet(props) {
  const [clothes, setClothes] = useState("");

  // ? Modal 열릴때 클릭된 이미지 파일의 id 값
  const [clothId, setClothId] = useState("");

  // ? Modal 설정
  const [isOpen, setIsOpen] = useState(false);
  const modalClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    try {
      axios.get("/list").then((data) => setClothes(data));
    } catch (e) {
      alert(e); // ! check error -> 배포전 수정(console로)
    }
  }, []);

  function showCloth(value) {
    return (
      clothes.data && (
        <ImageList sx={{ width: 200, height: 200 }} cols={1} rowheight={164}>
          {clothes.data?.map((cloth) =>
            cloth.type === value ? (
              <ImageListItem key={cloth.id + cloth.type}>
                <img
                  src={`${cloth.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${cloth.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt="cloth"
                  loading="lazy"
                  onClick={() => {
                    setClothId(cloth.id);
                    setIsOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                />
                {clothId === cloth.id ? (
                  <MyModal
                    isopen={isOpen}
                    closemodal={modalClose}
                    id={cloth.id}
                    type={cloth.type}
                    image={cloth.img}
                    modalvalue={props.modalvalue}
                  />
                ) : null}
              </ImageListItem>
            ) : null
          )}
        </ImageList>
      )
    );
  }

  return (
    <>
      <div
        className={
          props.classvalue === "mycloset"
            ? "wrap-makecloset"
            : "wrap-outfitcloset"
        }
      >
        <div>
          TOP
          <div className="close-box TOP">{showCloth("TOP")}</div>
        </div>
        <div>
          BOTTOM
          <div className="close-box BOTTOM">{showCloth("BOTTOM")}</div>
        </div>
        <div>
          OUTER
          <div className="close-box OUTER">{showCloth("OUTER")}</div>
        </div>
        <div>
          SHOES
          <div className="close-box SHOES">{showCloth("SHOES")}</div>
        </div>
      </div>
    </>
  );
}
