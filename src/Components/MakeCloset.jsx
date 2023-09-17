import React from "react";
import Closet from "./onlineCloset/Closet";
import ClothUpload from "./uploadClothes/ClothUpload";

import { Box, Paper, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function ClosetGrid() {
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    backgroundColor: "#fff",
    padding: theme.spacing(1),
    textAlign: "center",
    height: "460px",
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <ClothUpload />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <Closet />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
