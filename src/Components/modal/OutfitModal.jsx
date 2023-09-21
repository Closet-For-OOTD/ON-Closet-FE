import React from "react";
import axios from "axios";
import Modal from "./MyModal";
import CustomButton from "../button/CustomButton";

export default function OutfitModal({ id, type, image, close }) {
  const saveImage = (imageId, imageType, imageFile) => {
    try {
      const { data } = axios.post("/uploadOutfit", {
        value: { id: imageId, type: imageType, img: imageFile },
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const clickPutOn = () => {
    saveImage(id, type, image);
    alert(`${type}이 착용되었습니다.`);
    window.location.reload();
  };

  const clickCancel = () => {
    close();
  };
  const clickDelete = (e) => {
    console.log(e.target.id);
    const removeid = e.target.id;
    try {
      const { data } = axios.delete("/delete", { data: { removeid } });

      window.location.reload();
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Modal />
      <div>이미지의 Outfit을 확인하시겠습니까?</div>
      <CustomButton content="착용" id={id} onClick={clickPutOn} />
      <CustomButton content="삭제" id={id} onClick={clickDelete} />
      <CustomButton content="취소" id={id} onClick={clickCancel} />
    </div>
  );
}
