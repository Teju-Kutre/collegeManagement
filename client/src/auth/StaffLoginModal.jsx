import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TextField } from "@mui/material";
import axios from "axios";

const StaffLoginModal = ({ open, handleClose }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);

  const handleLogin = () => {
    const url = "http://localhost:4000/staff/login";
    axios
      .post(url, {
        emailId: email,
        password: password,
      })
      .then((response) => {
        if (response.data === true) {
          navigate("/staff", { state: { emailId: email } });
        } else setLoginStatus(false);
      });
  };

  const style = {
    position: "absolute",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: "-webkit-fill-available",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const textStyle = {
    fontSize: "25px",
    fontWeight: "bold",
    color: "#1976d2",
    alignSelf: "center",
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography sx={textStyle}>Staff Login</Typography>
        <br />
        <TextField
          id="outlined-basic"
          label="Staff Email"
          variant="outlined"
          onChange={(event) => setEmail(event.target.value)}
        />

        <br />

        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>
        <br />

        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
        <br />
        {loginStatus === false && (
          <Typography variant="h6" color={"red"} textAlign={"center"}>
            Incorrect Email / Password
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default StaffLoginModal;
