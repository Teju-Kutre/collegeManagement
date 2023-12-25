import { Box, Grid } from "@mui/material";
import React from "react";
import klelogo from "../assets/kleLogo.jpeg";
import "./styling.css";
import StaffDashboard from "./StaffDashboard";
import leave from "../assets/leave.svg";
import classAdjustment from "../assets/classAdjustment.svg";
import leaveAdjustment from "../assets/checkStatus.svg";
import calendar from "../assets/calendar.svg";
import Change_password from "../assets/Change_password.svg";
import logout from "../assets/logout.svg";
import { useState } from "react";
import StaffApplyLeave from "./StaffApplyLeave";
import applyLeave from "../assets/applyLeave.svg";

const Staff = () => {
  const dashboarditems = [
    { name: "Apply Leave", icon: leave, selected: true },
    {
      name: "Class Adjustment Confirmation",
      icon: classAdjustment,
      selected: false,
    },
    { name: "Leave Adjustment Status", icon: leaveAdjustment, selected: false },
    { name: "Leave Details of Current Year", icon: calendar, selected: false },
    { name: "Change Password", icon: Change_password, selected: false },
    { name: "Logout", icon: logout, selected: false },
  ];
  const [activeState, setActiveState] = useState("Apply Leave");
  const handleActiveState = (value) => {
    setActiveState(value);
  };

  const inputStyling = {
    border: "1px solid black",
  };
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sx={{ textAlignLast: "center" }}>
          <img src={klelogo} alt="kleLogo" className="kle" />
          <hr />
        </Grid>
        <Grid container item xs={12} sx={{ height: "100%" }}>
          <Grid item xs={3}>
            <StaffDashboard
              dashboardItems={dashboarditems}
              activeState={activeState}
              handleActiveState={handleActiveState}
            />
          </Grid>
          <Grid
            container
            item
            xs={activeState === "Apply Leave" ? 5 : 9}
            sx={{ justifyContent: "center" }}
          >
            {activeState === "Apply Leave" && <StaffApplyLeave />}
          </Grid>
          {activeState === "Apply Leave" && (
            <Grid item xs={4}>
              <img src={applyLeave} alt="applyLeave" />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default Staff;
