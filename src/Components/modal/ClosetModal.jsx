import React from "react";
import CustomButton from "../button/CustomButton";

export default function ClosetModal({ id, type, image }) {
  return (
    <div>
      <div>선택한 이미지를 삭제하시겠습니까?</div>
      <CustomButton content="삭제" id={id} type={type} img={image} />
      <CustomButton content="취소" />
    </div>
  );
}
