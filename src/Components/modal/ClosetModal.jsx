import React from "react";
import axios from "axios";
import CustomButton from "../button/CustomButton";

export default function ClosetModal({ id, close }) {
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

  const clickCancel = () => {
    close();
  };

  return (
    <div>
      <div>선택한 이미지를 삭제하시겠습니까?</div>
      <CustomButton content="삭제" id={id} onClick={clickDelete} />

      <CustomButton content="취소" id={id} onClick={clickCancel} />
    </div>
  );
}
