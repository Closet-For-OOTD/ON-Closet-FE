import React, { useState } from "react";
import { useLoginState } from "../../redux/context/loginContext";
import axios from "axios";
import "./ClothUpload.css";

export default function ClothUpload() {
  const { user } = useLoginState();
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
    // console.log(event.target.myfile.files);
    const formData = new FormData();
    formData.append("myfile", myfile);
    formData.append("clothingType", myselect);
    formData.append("userId", user.userId);
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
              Image :{" "}
              <input type="file" name="myfile" style={{ width: "200px" }} />
            </label>
            <br />
            <label>
              Type :
              <select
                className="clothType"
                value={selected}
                name="clothingType"
                onChange={changeSelect}
                style={{ width: "200px" }}
              >
                <option value="TOP">TOP</option>
                <option value="BOTTOM">BOTTOM</option>
                <option value="OUTER">OUTER</option>
                <option value="SHOES">SHOES</option>
              </select>
            </label>
          </div>

          <input type="submit" onClick={submitClick} />
        </form>
      </div>
    </>
  );
}
