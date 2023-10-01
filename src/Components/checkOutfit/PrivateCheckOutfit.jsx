import React from "react";
import { Navigate } from "react-router-dom";
import CheckOutfit from "./CheckOutfit";

export default function PrivateCheckOutfit() {
  const userId = localStorage.getItem("userId");
  return <>{userId ? <CheckOutfit /> : <Navigate to="/" />}</>;
}
