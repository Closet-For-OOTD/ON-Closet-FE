import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../assets/mainImage.png";
import Header from "./header/Header";
import CustomButton from "./button/CustomButton";

export default function MainPage({ user }) {
  return (
    <>
      <Header />
      <div style={{ fontSize: 100 }}>ON-Closet</div>
      <img src={mainLogo} alt="" style={{ width: "400px" }} />
      <br />
      <span style={{ margin: "30px" }}>
        <Link to="/upload">
          <CustomButton content="ADD clothes" />
        </Link>
      </span>
      <span style={{ margin: "30px" }}>
        <Link to="/outfit">
          <CustomButton content="ON-Closet" />
        </Link>
      </span>
    </>
  );
}
