import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import Outfit from "./components/checkOutfit/Outfit";
import Test from "./components/checkOutfit/test";
import MakeCloset from "./components/MakeCloset";
import CheckOutfit from "./components/CheckOutfit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/upload" element={<MakeCloset />} />
          <Route path="/outfit" element={<Outfit />} />
          <Route path="result" element={<CheckOutfit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
