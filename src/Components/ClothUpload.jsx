import React, { useState } from "react";
import axios from "axios";
import Closet from "./Closet";
// Grid
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
// select
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <div>Upload</div>
              <br />
              <br />
              <div>
                <form
                  action="/upload"
                  method="post"
                  encType="multipart/form-data"
                  onSubmit={onSubmitHandler}
                >
                  <label>Choose Image : </label>
                  <input type="file" name="myfile" />
                  <label>
                    Cloth Type:
                    {/* <select
                      className="clothType"
                      value={selected}
                      name="clothingType"
                      onChange={changeSelect}
                    >
                      <option value="TOP">TOP</option>
                      <option value="BOTTOM">BOTTOM</option>
                      <option value="OUTER">OUTER</option>
                      <option value="SHOES">SHOES</option>
                    </select> */}
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl sx={{ minWidth: 20 }}>
                        <InputLabel id="select-label">clothType</InputLabel>
                        <Select
                          className="clothType"
                          labelId="select-label"
                          label="label"
                          id="demo-simple-select"
                          value={selected}
                          name="clothingType"
                          onChange={changeSelect}
                        >
                          <MenuItem value="TOP">TOP</MenuItem>
                          <MenuItem value="BOTTOM">BOTTOM</MenuItem>
                          <MenuItem value="OUTER">OUTER</MenuItem>
                          <MenuItem value="SHOES">SHOES</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </label>
                  <p style={{ color: "lightgrey" }}>
                    {" "}
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
    </>
  );
}
