import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import MakeCloset from "./components/makeCloset/MakeCloset";
import CheckOutfit from "./components/checkOutfit/CheckOutfit";
import SingIn from "./components/member/SingIn";
import Login from "./components/member/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/upload" element={<MakeCloset />} />
          <Route path="/outfit" element={<CheckOutfit />} />
          <Route path="/signin" element={<SingIn />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
