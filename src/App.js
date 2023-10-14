import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import PrivateCloset from "./components/makeCloset/PrivateCloset";
import PrivateCheckOutfit from "./components/checkOutfit/PrivateCheckOutfit";
import SignIn from "./components/member/SignIn";
import Login from "./components/member/Login";
import { useLoginState } from "./components/redux/context/loginContext";
import axios from "axios";

function App() {
  const { user } = useLoginState();
  const [isLog, setIsLog] = useState("");
  useEffect(() => {
    axios.get("/authcheck").then((res) => {
      if (res.data.isLogin === "True" && user) {
        setIsLog(true);
      } else {
        setIsLog(false);
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {isLog ? (
            <Route path="/" element={<MainPage />} />
          ) : (
            <Route path="/" element={<Login />} />
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
