import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChooseClassNameStyle } from "../PrivateCloset";
import axios from "axios";
import MyModal from "../../modal/MyModal";
import "./Closet.css";
import { ImageList, ImageListItem } from "@mui/material";

export default function Closet() {
  const clothState = useSelector((state) => state.closetReducer);
  const modalState = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();

  const clickCloth = clothState.clickClothId;
  const clothInfo = clothState.clothInfo;
  const styleContext = useContext(ChooseClassNameStyle);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    try {
      axios
        .get(`/list`)
        .then((data) => dispatch({ type: "GET_CLOTH_INFO", clothInfo: data }));
    } catch (e) {
      console.log(e);
    }
  }, []);

  function showCloth(value) {
    return (
      clothInfo.data && (
        <ImageList sx={{ width: 200, height: 200 }} cols={1} rowheight={164}>
          {clothInfo.data?.map((cloth) =>
            cloth.type === value && cloth.userId === userId ? (
              <ImageListItem key={cloth.id + cloth.type}>
                <img
                  src={`${cloth.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${cloth.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt="cloth"
                  loading="lazy"
                  onClick={() => {
                    dispatch({ type: "CLICK_CLOTH", id: cloth.id });
                    dispatch({
                      type: "OPEN_MODAL",
                      open: true,
                    });
                  }}
                  style={{ cursor: "pointer" }}
                ></img>
                {clickCloth === cloth.id && modalState.modal_open ? (
                  <MyModal id={cloth.id} type={cloth.type} image={cloth.img} />
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
          styleContext === "make-closet"
            ? "closet-makecloset"
            : "closet-outfitcloset"
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
