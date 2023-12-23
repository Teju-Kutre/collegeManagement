import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import "./styling.css";
const StaffDashboard = ({ dashboardItems, handleActiveState, activeState }) => {
  const dashboardStyle = {
    padding: "15px",
    ":hover": {
      color: "#1976d2",
      background: "#b3cfea",
      borderLeft: "4px solid #1976d2",
    },
  };
  const dashboardStyleSelected = {
    padding: "15px",
    color: "#1976d2",
    background: "#b3cfea",
    borderLeft: "4px solid #1976d2",
  };
  return (
    <>
      {dashboardItems.map((item) => (
        <Grid
          key={item.name}
          container
          sx={
            item.name === activeState ? dashboardStyleSelected : dashboardStyle
          }
          onClick={() => handleActiveState(item.name)}
        >
          <Grid item xs={2}>
            <img src={item.icon} alt={item.icon} className="dashboard-icon" />
          </Grid>
          <Grid item xs={10}>
            <Typography sx={{ paddingTop: "7px" }}>{item.name}</Typography>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default StaffDashboard;
