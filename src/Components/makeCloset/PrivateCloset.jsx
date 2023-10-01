import React from "react";
import { Navigate } from "react-router-dom";
import MakeCloset from "./MakeCloset";

export default function PrivateCloset() {
  const userId = localStorage.getItem("userId");
  return <>{userId ? <MakeCloset /> : <Navigate to="/" />}</>;
}
