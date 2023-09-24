import React from "react";
import MyModal from "./MyModal";
import CustomButton from "../button/CustomButton";

export default function OutfitModal({ id, type, image, closemodal }) {
  return (
    <div>
      <MyModal />
      <div>이미지의 Outfit을 확인하시겠습니까?</div>
      <CustomButton
        content="착용"
        id={id}
        type={type}
        img={image}
        closemodal={closemodal}
      />
      <CustomButton
        content="삭제"
        id={id}
        type={type}
        img={image}
        closemodal={closemodal}
      />
      <CustomButton
        content="취소"
        id={id}
        type={type}
        img={image}
        closemodal={closemodal}
      />
    </div>
  );
}
