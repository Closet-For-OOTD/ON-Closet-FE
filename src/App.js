import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import ClothUpload from "./Components/ClothUpload";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/upload" element={<ClothUpload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
