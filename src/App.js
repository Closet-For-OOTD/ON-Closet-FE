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
  const userId = localStorage.getItem("userId");
  // useEffect로 login 여부 체크시 한번만 체크하면 되는지 생각해보기!
  useEffect(() => {
    axios.get("/authcheck").then((res) => {
      if (res.data.isLogin === "True") {
        setIsLog("MainPage");
      } else {
        setIsLog("Login");
      }
    });
  }, [isLog]);

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
          <Route path={"/outfit"} element={<PrivateCheckOutfit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
