import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import Outfit from "./components/checkOutfit/Outfit";
import Test from "./components/checkOutfit/test";
import MakeCloset from "./components/MakeCloset";
import Drawers from "./components/Drawers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/upload" element={<MakeCloset />} />
          <Route path="/outfit" element={<Test />} />
          <Route path="result" element={<Drawers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
