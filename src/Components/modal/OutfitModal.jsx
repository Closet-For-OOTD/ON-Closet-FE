import React from "react";
import CustomButton from "../button/CustomButton";

export default function OutfitModal({ id, type, image }) {
  return (
    <div>
      <div>이미지의 Outfit을 확인하시겠습니까?</div>
      <CustomButton content="착용" id={id} type={type} img={image} />
      <CustomButton content="삭제" id={id} type={type} img={image} />
      <CustomButton content="취소" />
    </div>
  );
}
