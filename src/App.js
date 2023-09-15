import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import ClothUpload from "./components/ClothUpload";
import Outfit from "./components/Outfit";

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
