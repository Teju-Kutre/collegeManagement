import React from "react";
import { Grid } from "@mui/material";
import Chip from "@mui/material/Chip";

const classAdjustmentConfirmation = () => {
  const titleChip = {
    backgroundColor: "#1976d2",
    color: "white",
    padding: "10px",
    margin: "10px",
  };
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Chip label="Class Adjustment Confirmation" sx={titleChip} />
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default classAdjustmentConfirmation;
