import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../assets/mainImage.png";
import CustomButton from "./button/CustomButton";
import axios from "axios";

export default function MainPage() {
  const clickLogout = () => {
    axios.get("/logout");
  };

  return (
    <>
      <div style={{ fontFamily: "TTTtangsbudaejjigaeB", fontSize: 150 }}>
        OOTD
      </div>
      <a href="/" onClick={clickLogout}>
        logout
      </a>
      <img src={mainLogo} alt="" style={{ width: "400px" }} />
      <br />
      <Link to="/upload_cloth">
        {/* <Link to="/{userId}/upload_closet"> */}
        <CustomButton content="ADD clothes" />
      </Link>
    </>
  );
}
