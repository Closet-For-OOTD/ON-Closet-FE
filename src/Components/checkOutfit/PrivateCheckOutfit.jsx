import React from "react";
import { Navigate } from "react-router-dom";
import { useLoginState } from "../redux/context/loginContext";
import CheckOutfit from "./CheckOutfit";

export default function PrivateCheckOutfit() {
  const { user } = useLoginState();
  return <>{user.userId ? <CheckOutfit /> : <Navigate to="/" />}</>;
}
