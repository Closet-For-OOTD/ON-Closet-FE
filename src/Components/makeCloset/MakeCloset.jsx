import React from "react";
import { Link } from "react-router-dom";
import Closet from "./onlineCloset/Closet";
import ClothUpload from "./uploadClothes/ClothUpload";
import CustomButton from "../button/CustomButton";
import Header from "../header/Header.jsx";

import { Box, Paper, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function MakeCloset() {
  // const userId = localStorage.getItem("userId");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    padding: theme.spacing(1),
    textAlign: "center",
    height: "500px",
  }));

  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <ClothUpload classvalue="makecloset" />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <Closet
                modalvalue="makeCloset"
                classvalue="mycloset"
                style={{ display: "block" }}
              />
              <Link to="/outfit">
                <CustomButton content="♡ ON - Closet" />
              </Link>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
