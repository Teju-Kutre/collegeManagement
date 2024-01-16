import { Grid } from "@mui/material";
import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import blockDateStoryset from "../assets/blockDateStoryset.svg";

const titleChip = {
  backgroundColor: "#1976d2",
  color: "white",
  padding: "10px",
  margin: "10px",
};

const AdminBlockDate = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleReset = () => {
    setFromDate("");
    setToDate("");
  };

  return (
    <Grid container sx={{ justifyContent: "center", padding: "20px" }}>
      <Grid
        item
        xs={7}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Chip label="Block Date" sx={titleChip} />
        <br />
        <br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            inputFormat="MM/dd/yyyy"
            label="From (Select Date)"
            selected={new Date()}
            name="fromDate"
            value={fromDate}
            // slotProps={{ textField: { size: "small" } }}
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
            name="toDate"
            value={toDate}
            label="To (Select Date)"
            onChange={(date) =>
              setToDate(new Date(date).toLocaleDateString("fr-FR"))
            }
          />
        </LocalizationProvider>
        <br />
        <Grid display={"flex"}>
          <Grid xs={3}>
            <Button variant="contained" onClick={handleReset}>
              Reset
            </Button>
          </Grid>
          <Grid xs={6.5}></Grid>
          <Grid xs={2.5}>
            <Button variant="contained">Block date</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <img src={blockDateStoryset} alt="blockDateStoryset" />
      </Grid>
    </Grid>
  );
};

export default AdminBlockDate;
