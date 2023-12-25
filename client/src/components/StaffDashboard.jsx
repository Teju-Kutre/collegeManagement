import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import "./styling.css";
const StaffDashboard = ({ dashboardItems, handleActiveState, activeState }) => {
  const dashboardStyle = {
    padding: "10px",
    ":hover": {
      color: "#1976d2",
      background: "#b3cfea",
      border:"1px solid #1976d2",
      borderLeft: "5px solid #1976d2",
      borderRadius:"7px"   
    },
  };
  const dashboardStyleSelected = {
    padding: "10px",
    color: "#1976d2",
    background: "#b3cfea",
    border:"1px solid #1976d2",
    borderLeft: "5px solid #1976d2",
   borderRadius:"7px"
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
