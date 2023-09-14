import React from "react";
import axios from "axios";

export default function Modal({ id, type, image, clicktop, save }) {
  const clickPutOn = () => {
    // clicktop(image);
    save(id, image);
    alert("TOP이 착용되었습니다.");
    window.location.reload();
  };
  const clickCancel = () => {
    id = null;
    alert("취소" + id);
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
      <button id={id} onClick={clickPutOn}>
        착용
      </button>
      <button id={id} onClick={clickCancel}>
        취소
      </button>
      <button id={id} onClick={clickDelete}>
        삭제
      </button>
    </div>
  );
}
