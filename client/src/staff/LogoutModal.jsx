import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
};

const buttonStyle = {
  padding: "10px",
};

const LogoutModal = ({ handleClose, open, handleLogout }) => {
  const profileHeader = {
    backgroundColor: "#1976d2",
    padding: "20px",
    textAlign: "center",
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container>
          <Grid item xs={12} sx={profileHeader} display={"flex"}>
            <Typography
              variant="h5"
              sx={{ color: "white", paddingTop: "15px" }}
            >
              Are You sure you want to logout?
            </Typography>
          </Grid>
          <Grid item xs={2} sx={buttonStyle}>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
          </Grid>
          <Grid xs={7.5}></Grid>
          <Grid xs={2.5} sx={buttonStyle}>
            <Button variant="contained" onClick={handleLogout}>
              logout
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default LogoutModal;
