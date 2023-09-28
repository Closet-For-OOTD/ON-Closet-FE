import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import MakeCloset from "./components/makeCloset/MakeCloset";
import CheckOutfit from "./components/checkOutfit/CheckOutfit";
import SignIn from "./components/member/SignIn";
import Login from "./components/member/Login";
import axios from "axios";

function App() {
  const [isLog, setIsLog] = useState("");

  useEffect(() => {
    axios.get("/authcheck").then((res) => {
      if (res.data.isLogin === "True") {
        setIsLog("MainPage");
      } else {
        setIsLog("Login");
      }
    });
  }, []);
  console.log("언제:", isLog);

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
          <Route path="/upload_cloth" element={<MakeCloset />} />
          {/* <Route path="/{userId}/upload_cloth" element={<MakeCloset />} /> */}
          <Route path="/{userId}/outfit" element={<CheckOutfit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
