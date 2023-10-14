import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoginState } from "../../redux/context/loginContext";
import "./Outfit.css";
import Header from "../../header/Header";
import axios from "axios";
import wface from "../../../assets/wface.png";
import err from "../../../assets/onerror.png";

export default function Outfit() {
  const { user } = useLoginState();

  const dispatch = useDispatch();
  const clothSelector = useSelector((state) => state.outfitReducer);

  useEffect(() => {
    axios.get("/uploadOutfit").then((res) => {
      const value = res.data;
      for (let i = 0; i < value.length; i++) {
        const type = value[i].type;
        const img = value[i].img;
        const id = value[i].userId;
        if (type === "TOP" && id === user.userId) {
          dispatch({ type: "TOP_UPLOAD", top: img });
        } else if (type === "BOTTOM" && id === user.userId) {
          dispatch({ type: "BOTTOM_UPLOAD", bottom: img });
        } else if (type === "OUTER" && id === user.userId) {
          dispatch({ type: "OUTER_UPLOAD", outer: img });
        } else if (type === "SHOES" && id === user.userId) {
          dispatch({ type: "SHOIES_UPLOAD", shoes: img });
        }
      }
    });
  }, []);

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
            <img src={clothSelector.top} alt="" onError={handleError} />
          </div>
          <div id="bottom-box">
            <img src={clothSelector.bottom} alt="" onError={handleError} />
          </div>
          <div id="shoes-box">
            <img src={clothSelector.shoes} alt="" onError={handleError} />
          </div>
        </div>
        <div className="left-box">
          <div id="outer-box">
            <img src={clothSelector.outer} alt="" onError={handleError} />
          </div>
        </div>
      </div>
    </>
  );
}
