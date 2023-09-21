import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../assets/mainImage.png";
import CustomButton from "./button/CustomButton";

export default function MainPage() {
  return (
    <>
      <div style={{ fontFamily: "TTTtangsbudaejjigaeB", fontSize: 150 }}>
        OOTD
      </div>
      <img src={mainLogo} alt="" style={{ width: "400px" }} />
      <br />
      <Link to="/upload">
        <CustomButton content="ADD clothes" />
      </Link>
    </>
  );
}
