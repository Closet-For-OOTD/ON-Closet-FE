import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../assets/12.png";

import Button from "@mui/material-next/Button";

export default function MainPage() {
  return (
    <>
      <div style={{ fontFamily: "TTTtangsbudaejjigaeB", fontSize: 150 }}>
        OOTD
      </div>
      <img src={mainLogo} alt="" style={{ width: "400px" }} />
      <br />
      <Link to="/upload">
        <Button
          style={{ fontFamily: "GoryeongStrawberry" }}
          color="secondary"
          disabled={false}
          size="large"
          variant="outlined"
        >
          ♡ ADD CLOTHES
        </Button>
      </Link>
    </>
  );
}
