import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const StaffApplyLeave = () => {
  const [leaveType, setLeaveType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const textStyle = {
    backgroundColor: "#1976d2",
    color: "white",
    padding: "10px",
  };
  const inputGrid = {
    border: "1px solid black",
    textAlign: "center",
  };
  return (
    <>
      <Grid item xs={8} sx={inputGrid}>
        <Typography sx={textStyle}>Apply Leave</Typography>
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type Of Leave</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={leaveType}
            label="Type of Leave"
            //   onChange={handleChange}
          >
            <MenuItem value="Casual Leave">Casual Leave</MenuItem>
            <MenuItem value="Duty Leave">Duty Leave</MenuItem>
            <MenuItem value="Leave without Pay">Leave without Pay</MenuItem>
          </Select>
          <br />
          <TextField
            id="outlined-basic"
            label="Number of Days"
            variant="outlined"
          />
          <br />
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              inputFormat="MM/dd/yyyy"
              selected={new Date()}
              onChange={(date) =>
                setFromDate(new Date(date).toLocaleDateString("fr-FR"))
              }
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              inputFormat="MM/dd/yyyy"
              selected={new Date()}
              onChange={(date) =>
                setToDate(new Date(date).toLocaleDateString("fr-FR"))
              }
            />
          </LocalizationProvider> */}
          <TextField
            id="outlined-multiline-static"
            label="Reason"
            multiline
            rows={2}
            defaultValue="Default Value"
          />
          <br />
          <TextField
            type="number"
            id="outlined-basic"
            label="Number of classes / Labs / Work to be adjusted"
            variant="outlined"
          />
          <br />
          <Button variant="text">Reset</Button>
          <br />
          <Button variant="contained">Next</Button>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        sflkv
      </Grid>
    </>
  );
};
export default StaffApplyLeave;
