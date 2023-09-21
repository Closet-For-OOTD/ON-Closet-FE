import React from "react";
import axios from "axios";
import Modal from "./MyModal";

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
      <button id={id} onClick={clickPutOn}>
        착용
      </button>
      <button id={id} onClick={clickDelete}>
        삭제
      </button>
      <button id={id} onClick={clickCancel}>
        취소
      </button>
    </div>
  );
}
