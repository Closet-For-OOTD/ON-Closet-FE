import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import Outfit from "./components/checkOutfit/Outfit";
import MakeCloset from "./components/MakeCloset";
import ClothUpload from "./components/uploadClothes/ClothUpload";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/upload" element={<MakeCloset />} />
          <Route path="/outfit" element={<Outfit />} />
          <Route path="result" element={<ClothUpload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
