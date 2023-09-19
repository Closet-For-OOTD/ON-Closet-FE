import React from "react";
import { Link } from "react-router-dom";
import Closet from "./onlineCloset/Closet";
import ClothUpload from "./uploadClothes/ClothUpload";

import { Box, Paper, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material-next/Button";

export default function MakeCloset() {
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    backgroundColor: "#fff",
    padding: theme.spacing(1),
    textAlign: "center",
    height: "500px",
  }));

  return (
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
            <div className="button">
              <Link to="/outfit">
                <Button
                  style={{ fontFamily: "GoryeongStrawberry" }}
                  color="secondary"
                  disabled={false}
                  size="large"
                  variant="outlined"
                >
                  ♡ ON - Closet
                </Button>
              </Link>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
