import React, { useState } from "react";
import axios from "axios";
import Closet from "./Closet";
import "./ClothUpload.css";
// Grid
import { Box, Paper, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "500px",
  }));

  return (
    <div className="wrap">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <div className="title">Clothes Upload</div>

              <div>
                <form
                  action="/upload"
                  method="post"
                  encType="multipart/form-data"
                  onSubmit={onSubmitHandler}
                >
                  <label style={{ marginLeft: 10 }}>
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
                  <p style={{ color: "lightgrey" }}>
                    * 이미지 파일만 업로드 가능합니다.
                  </p>
                  <input type="submit" onClick={submitClick} />
                </form>
              </div>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <Closet />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
