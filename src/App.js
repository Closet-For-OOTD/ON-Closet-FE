import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import PrivateCloset from "./components/makeCloset/PrivateCloset";
import PrivateCheckOutfit from "./components/checkOutfit/PrivateCheckOutfit";
import SignIn from "./components/member/SignIn";
import Login from "./components/member/Login";
import axios from "axios";

function App() {
  const [isLog, setIsLog] = useState("");
  const userId = localStorage.getItem("userID");
  useEffect(() => {
    axios.get("/authcheck").then((res) => {
      if (res.data.isLogin === "True") {
        setIsLog("MainPage");
      } else {
        setIsLog("Login");
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {isLog === "MainPage" ? (
            <Route path="/" element={<MainPage setLog={setIsLog} />} />
          ) : (
            <Route path="/" element={<Login setLog={setIsLog} />} />
          )}
          <Route path="/signin" element={<SignIn />} />
          <Route path={"/upload"} element={<PrivateCloset />} />
          {/* <Route path={`/upload/:${userId}`} element={<MakeCloset />} /> */}
          <Route path={"/outfit"} element={<PrivateCheckOutfit />} />
          {/* <Route path={`/outfit/:${userId}`} element={<CheckOutfit />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
