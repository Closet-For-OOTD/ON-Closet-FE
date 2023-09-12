import React, { useState } from "react";
import Closet from "./Closet";

export default function ClothUpload() {
  const [selected, setSelected] = useState("");
  const changeSelect = (event) => {
    setSelected(event.target.value);
  };
  console.log(selected);

  return (
    <>
      <div>Upload</div>
      <br />
      <br />
      <div>
        <form action="/upload" method="post" encType="multipart/form-data">
          <label>이미지 선택 : </label>
          <input type="file" name="myfile" />
          <label>
            이미지 종류:
            <select
              className="clothType"
              value={selected}
              name="clothingType"
              onChange={changeSelect}
            >
              <option value="TOP">TOP</option>
              <option value="BOTTOM">BOTTOM</option>
              <option value="OUTER">OUTER</option>
              <option value="SHOES">SHOES</option>
            </select>
          </label>
          <p style={{ color: "lightgrey" }}>
            {" "}
            * 이미지 파일만 업로드 가능합니다.
          </p>
          <input type="submit" />
        </form>
      </div>
      <br />
      <br />
      <Closet />
    </>
  );
}
