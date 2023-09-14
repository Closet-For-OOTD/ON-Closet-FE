import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./Components/MainPage";
import ClothUpload from "./Components/ClothUpload";
import Outfit from "./Components/Outfit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/upload" element={<ClothUpload />} />
          <Route path="/outfit" element={<Outfit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
