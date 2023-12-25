import React, { Fragment, useState } from "react";
import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import applyLeave from "../assets/applyLeave.svg";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const StaffApplyLeave = () => {
  const [leaveType, setLeaveType] = useState("");
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [reason, setReason] = useState("");
  const [workAdjusted, setWorkAdjusted] = useState(0);

  const handleNext = () => {
    console.log("leaveType: " + leaveType);
    console.log("numberOfDays: " + numberOfDays);
    console.log("fromDate: " + fromDate);
    console.log("toDate: " + toDate);
    console.log("reason: " + reason);
    console.log("workAdjusted: " + workAdjusted);
  };

  const handleReset = () => {
    setLeaveType("");
    setNumberOfDays(0);
    setFromDate();
    setToDate();
    setReason("");
    setWorkAdjusted(0);
  };

  const titleChip = {
    backgroundColor: "#1976d2",
    color: "white",
    padding: "10px",
  };
  const inputGrid = {
    border: "1px solid black",
    textAlign: "center",
  };
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: applyLeave,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Chip label="Apply Leave" sx={titleChip} />

      <FormControl sx={{ m: 2, minWidth: 500, maxHeight: 10 }} size="small">
        <InputLabel id="demo-select-small-label">Type of Leave</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={leaveType}
          label="Type of Leave"
          onChange={(event) => setLeaveType(event.target.value)}
        >
          <MenuItem value={leaveType}>
            <em>None</em>
          </MenuItem>
          <MenuItem value="Casual Leave">Casual Leave</MenuItem>
          <MenuItem value="Duty Leave">Duty Leave</MenuItem>
          <MenuItem value="Leave without pay">Leave without pay</MenuItem>
        </Select>
        <br />
        <TextField
          size="small"
          id="outlined-basic"
          label="Number of Days"
          variant="outlined"
          type="number"
          value={numberOfDays}
          sx={{ height: "50px" }}
          onChange={(event) => setNumberOfDays(event.target.value)}
        />
        <br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            inputFormat="MM/dd/yyyy"
            label="From (Select Date)"
            selected={new Date()}
            value={fromDate}
            slotProps={{ textField: { size: "small" } }}
            onChange={(date) =>
              setFromDate(new Date(date).toLocaleDateString("fr-FR"))
            }
          />
        </LocalizationProvider>
        <br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            inputFormat="MM/dd/yyyy"
            selected={new Date()}
            value={toDate}
            label="To (Select Date)"
            slotProps={{ textField: { size: "small" } }}
            onChange={(date) =>
              setToDate(new Date(date).toLocaleDateString("fr-FR"))
            }
          />
        </LocalizationProvider>
        <br />
        <TextField
          size="small"
          id="outlined-multiline-static"
          label="Reason for Leave"
          multiline
          value={reason}
          rows={2}
          onChange={(event) => setReason(event.target.value)}
        />
        <br />
        <TextField
          size="small"
          id="outlined-basic"
          label="Number of Classes/Labs/Work to be adjusted"
          variant="outlined"
          value={workAdjusted}
          type="number"
          onChange={(event) => setWorkAdjusted(event.target.value)}
        />
        <br />
        <Grid container display={"flex"}>
          <Grid item xs={2}>
            <Button variant="contained" onClick={handleReset}>
              Reset
            </Button>
          </Grid>
          <Grid item xs={8.5}></Grid>
          <Grid item xs={1.5}>
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </Grid>
  );
};
export default StaffApplyLeave;
