import React from "react";
import { createContext } from "react";
import { Navigate } from "react-router-dom";
import MakeCloset from "./MakeCloset";

// closet 페이지 모달 or outfit 페이지 모달
export const ChooseModal = createContext();
// closet의 className에 따라 가로 or 세로 배치
export const ChooseClassNameStyle = createContext();

export default function PrivateCloset() {
  const userId = localStorage.getItem("userId");

  return (
    <>
      {userId ? (
        <ChooseModal.Provider value="closet-modal">
          <ChooseClassNameStyle.Provider value="make-closet">
            <MakeCloset />
          </ChooseClassNameStyle.Provider>
        </ChooseModal.Provider>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
