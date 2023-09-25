import React from "react";
import axios from "axios";
import Button from "@mui/material-next/Button";

export default function CustomButton({ content, id, type, img, closemodal }) {
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
    saveImage(id, type, img);
    alert(`${type}이 착용되었습니다.`);
    window.location.reload();
  };

  const clickCancel = () => {
    closemodal();
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
    <Button
      style={{ fontFamily: "GoryeongStrawberry" }}
      color="secondary"
      disabled={false}
      size="large"
      variant="outlined"
      id={id}
      onClick={
        content === "착용"
          ? clickPutOn
          : content === "삭제"
          ? clickDelete
          : clickCancel
      }
      close={content === "취소" ? closemodal : null}
    >
      {content}
    </Button>
  );
}