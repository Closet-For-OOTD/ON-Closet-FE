import React from "react";
import Button from "@mui/material-next/Button";

export default function CustomButton({ content }) {
  return (
    <Button
      style={{ fontFamily: "GoryeongStrawberry" }}
      color="secondary"
      disabled={false}
      size="large"
      variant="outlined"
    >
      {content}
    </Button>
  );
}
