import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import Outfit from "./components/checkOutfit//outfit/Outfit";
import MakeCloset from "./components/makeCloset/MakeCloset";
import CheckOutfit from "./components/checkOutfit/CheckOutfit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/upload" element={<MakeCloset />} />
          <Route path="/outfit" element={<CheckOutfit />} />
          <Route path="result" element={<Outfit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
