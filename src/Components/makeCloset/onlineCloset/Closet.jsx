import React, { useEffect, useState } from "react";
import axios from "axios";
import ClosetModal from "../../modal/ClosetModal";
import OutfitModal from "../../modal/OutfitModal";
import "./Closet.css";

import { ImageList, ImageListItem } from "@mui/material";

export default function Closet(props) {
  const [clothes, setClothes] = useState("");

  // ? Modal 열릴때 클릭된 이미지 파일의 id 값
  const [clothId, setClothId] = useState("");

  useEffect(() => {
    try {
      axios.get("/list").then((data) => setClothes(data));
    } catch (e) {}
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
                  onClick={() => setClothId(cloth.id)}
                  style={{ cursor: "pointer" }}
                />

                {props.modalvalue === "makeCloset" && clothId === cloth.id ? (
                  <ClosetModal
                    id={cloth.id}
                    type={cloth.type}
                    image={cloth.img}
                  />
                ) : props.modalvalue === "outfit" && clothId === cloth.id ? (
                  <OutfitModal
                    id={cloth.id}
                    type={cloth.type}
                    image={cloth.img}
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
