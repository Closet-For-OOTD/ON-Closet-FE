import React, { useState } from "react";

export default function Modal({ id, type, image, click }) {
  const clickPutOn = () => {
    click(image);
    alert(click);
  };
  const clickCancel = () => {
    id = null;
    alert("취소" + id);
  };
  const clickDelete = () => {
    console.log();
  };

  return (
    <div>
      <button onClick={clickPutOn}>착용</button>
      <button onClick={clickCancel}>취소</button>
      <button onClick={clickDelete}>삭제</button>
    </div>
  );
}
