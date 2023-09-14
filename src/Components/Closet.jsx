import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Closet.css";

export default function Closet() {
  const [clothes, setClothes] = useState("");

  function showCloth(value) {
    return clothes.data?.map((cloth) =>
      cloth.type === value ? (
        <div key={cloth.id + cloth.type}>
          <img src={cloth.img} alt="cloth" />
        </div>
      ) : (
        ""
      )
    );
  }

  useEffect(() => {
    try {
      axios.get("/list").then((data) => setClothes(data));
    } catch (e) {}
  }, []);

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
          <span className="close-box TOP">{showCloth("TOP")}</span>
          <span className="close-box BOTTOM">{showCloth("BOTTOM")}</span>
          <span className="close-box OUTER">{showCloth("OUTER")}</span>
          <span className="close-box SHOES">{showCloth("SHOES")}</span>
        </div>
        <div className="button">
          <Link to="/outfit">
            <button>착장</button>
          </Link>
        </div>
      </div>
    </>
  );
}
