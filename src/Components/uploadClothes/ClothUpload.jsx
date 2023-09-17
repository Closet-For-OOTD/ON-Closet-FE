import React, { useState } from "react";
import axios from "axios";
import "./ClothUpload.css";

export default function ClothUpload() {
  const [selected, setSelected] = useState("");
  const changeSelect = (event) => {
    setSelected(event.target.value);
  };

  const submitClick = () => {
    window.location.reload();
  };

  const sendFile = (file) => {
    try {
      const { data } = axios.post("/upload", file);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const myfile = event.target.myfile.files[0];
    const myselect = event.target.clothingType.value;
    console.log(event.target.myfile.files);
    const formData = new FormData();
    formData.append("myfile", myfile);
    formData.append("clothingType", myselect);
    sendFile(formData);
  };

  return (
    <>
      <div className="main-title">Clothes Upload</div>
      <div>
        <form
          action="/upload"
          method="post"
          encType="multipart/form-data"
          onSubmit={onSubmitHandler}
        >
          <div className="choose-box">
            <label>
              Choose Image :
              <input type="file" name="myfile" />
            </label>
            <br />
            <label>
              Cloth Type:
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
          </div>
          <p style={{ color: "lightgrey" }}>
            * 이미지 파일만 업로드 가능합니다.
          </p>
          <input type="submit" onClick={submitClick} />
        </form>
      </div>
    </>
  );
}
