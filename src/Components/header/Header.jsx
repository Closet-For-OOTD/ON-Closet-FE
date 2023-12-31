import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./Header.css";
import { AppBar, Toolbar } from "@mui/material";

export default function Header({ titlevalue, buttonvalue }) {
  const dispatch = useDispatch();
  const clickLogout = () => {
    axios.get("/logout");
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="header-box">
      <AppBar position="fixed" style={{ backgroundColor: "rgb(68, 112, 67)" }}>
        <Toolbar>
          <h1
            className={titlevalue === "outfit-title" ? "outfit-title" : "title"}
          >
            Check Your Outfit
          </h1>
          <a
            className={
              buttonvalue === "outfit-button" ? "outfit-button" : "button"
            }
            href="/"
            onClick={clickLogout}
          >
            Logout
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
