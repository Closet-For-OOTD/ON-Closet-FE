import React from "react";
import axios from "axios";

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
      <button id={id} onClick={clickDelete}>
        삭제
      </button>
      <button id={id} onClick={clickCancel}>
        취소
      </button>
    </div>
  );
}
