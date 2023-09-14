import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Closet.css";

export default function Closet() {
  const [clothes, setClothes] = useState("");

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
          <span className="close-box TOP">
            {clothes.data?.map((cloth) =>
              cloth.type === "TOP" ? (
                <div key={cloth.id + cloth.type}>
                  <span> {cloth.type}</span>
                  <img src={cloth.img} alt="cloth" />
                </div>
              ) : null
            )}
          </span>
          <span className="close-box BOTTOM">
            {clothes.data?.map((cloth) =>
              cloth.type === "BOTTOM" ? (
                <div key={cloth.id + cloth.type}>
                  <span> {cloth.type}</span>
                  <img src={cloth.img} alt="cloth" />
                </div>
              ) : null
            )}
          </span>
          <span className="close-box OUTER">
            {clothes.data?.map((cloth) =>
              cloth.type === "OUTER" ? (
                <div key={cloth.id + cloth.type}>
                  <span> {cloth.type}</span>
                  <img src={cloth.img} alt="cloth" />
                </div>
              ) : null
            )}
          </span>
          <span className="close-box SHOES">
            {clothes.data?.map((cloth) =>
              cloth.type === "SHOES" ? (
                <div key={cloth.id + cloth.type}>
                  <span> {cloth.type}</span>
                  <img src={cloth.img} alt="cloth" />
                </div>
              ) : null
            )}
          </span>
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
