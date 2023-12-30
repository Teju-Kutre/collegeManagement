import { Box, Grid } from "@mui/material";
import React from "react";
import kle from "../assets/kle.jpg";
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
import StaffClassAdjustmentConfirmation from "./StaffClassAdjustmentConfirmation";
import StaffPasswordChange from "../components/StaffPasswordChange";
import notification from "../assets/notification.svg";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

const Staff = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleNotification = () => {
    console.log("notification");
  };

  const handleClick = () => {
    setOpen(!open);
  };
  const logoutUser = () => {
    navigate("/");
  };

  return (
    <Box>
      <Grid container>
        <Grid
          container
          item
          sx={{
            backgroundColor: "#1976d2",
            display: "flex",
            textAlign: "center",
          }}
        >
          <Grid item xs={1}>
            <img src={kle} alt="logo" className="kle" />
          </Grid>
          <Grid
            item
            xs={9}
            sx={{
              color: "white",
              fontSize: "xx-large",
              padding: "15px",
              fontFamily: "sans-serif",
            }}
          >
            Staff Management
          </Grid>
          <Grid item xs={1}>
            <img
              onClick={handleNotification}
              src={notification}
              alt="logo"
              className="notification"
            />
          </Grid>
          <Grid item xs={1} sx={{ padding: "10px", color: "white" }}>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Profile" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText onClick={logoutUser} primary="Logout" />
                </ListItemButton>
              </List>
            </Collapse>
          </Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid
            item
            xs={2.5}
            sx={{
              backgroundColor: "white",
              borderRight: "3px solid #C3C3C3",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
              height: "640px",
            }}
          >
            <StaffDashboard
              dashboardItems={dashboarditems}
              activeState={activeState}
              handleActiveState={handleActiveState}
            />
          </Grid>
          <Grid container item xs={9.5}>
            {activeState === "Apply Leave" && <StaffApplyLeave />}
            {activeState === "Class Adjustment Confirmation" && (
              <StaffClassAdjustmentConfirmation />
            )}
            {activeState === "Change Password" && <StaffPasswordChange />}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Staff;
