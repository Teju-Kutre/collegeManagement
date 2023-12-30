import React from "react";
import { Grid, Typography } from "@mui/material";
import profileImage from "../assets/profileImage.png";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//All values in the table are Hardcoded, do change accordingly

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StaffHome = () => {
  //this is dummy data, change it to actual data later
  const casualLeaveDummyData = [
    {
      lid: 426,
      applyDate: "25/10/2023",
      noOfDays: 1,
      From: "26/10/2023",
      To: "27/10/2023",
      Reason: "Not well",
      HODApproval: "Yes",
      PrincipalApproval: "Yes",
    },
  ];
  const headStyle = {
    color: "#1565c0",
    fontWeight: "bold",
    fontSize: "20px",
  };

  const profileStyle = {
    textAlign: "center",
    borderRight: "1px solid #DCDCDC	",
    margin: "5px",
  };
  const leaveDetailStyle = {
    textAlign: "center",
    margin: "5px",
  };
  const labelStyle = {
    color: "#808080",
    marginTop: "10px",
  };
  const valueStyle = {
    fontWeight: "bold",
    color: "#1565c0",
  };

  return (
    <Grid container>
      <Grid item xs={2.5} sx={profileStyle}>
        <Typography sx={headStyle}>Employee Details</Typography>
        <img src={profileImage} alt="profile" className="profileImage" />
        <Typography sx={labelStyle}>Staff Id</Typography>
        <Typography sx={valueStyle}>CS09</Typography>
        <Typography sx={labelStyle}>Staff Name</Typography>
        <Typography sx={valueStyle}>Savita Bakare</Typography>
        <Typography sx={labelStyle}>Designation</Typography>
        <Typography sx={valueStyle}>Assistent Professor</Typography>
        <Typography sx={labelStyle}>Department</Typography>
        <Typography sx={valueStyle}>CS</Typography>
        <Typography sx={labelStyle}>Email Id</Typography>
        <Typography sx={valueStyle}>savitaBakare@gmail</Typography>
      </Grid>
      <Grid item xs={9.2} sx={leaveDetailStyle}>
        <Typography sx={headStyle}>Leave Details</Typography>
        <Typography sx={labelStyle}>Current Year 2023</Typography>
        <Typography sx={headStyle}>Casual Leave Details</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">LID</StyledTableCell>
                <StyledTableCell align="center">Apply Date</StyledTableCell>
                <StyledTableCell align="center">No of Days</StyledTableCell>
                <StyledTableCell align="center">From</StyledTableCell>
                <StyledTableCell align="center">To</StyledTableCell>
                <StyledTableCell align="center">Reason</StyledTableCell>
                <StyledTableCell align="center">HOD Approval</StyledTableCell>
                <StyledTableCell align="center">
                  Principal Approval
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {casualLeaveDummyData.map((row) => (
                <StyledTableRow key={row.lid}>
                  <StyledTableCell align="center">{row.lid}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.applyDate}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.noOfDays}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.From}</StyledTableCell>
                  <StyledTableCell align="center">{row.To}</StyledTableCell>
                  <StyledTableCell align="center">{row.Reason}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.HODApproval}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.PrincipalApproval}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography sx={labelStyle}>No. of CL: 8</Typography>
        <Typography sx={headStyle}>Academic Leave Details</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">LID</StyledTableCell>
                <StyledTableCell align="center">Apply Date</StyledTableCell>
                <StyledTableCell align="center">No of Days</StyledTableCell>
                <StyledTableCell align="center">From</StyledTableCell>
                <StyledTableCell align="center">To</StyledTableCell>
                <StyledTableCell align="center">Reason</StyledTableCell>
                <StyledTableCell align="center">HOD Approval</StyledTableCell>
                <StyledTableCell align="center">
                  Principal Approval
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {casualLeaveDummyData.map((row) => (
                <StyledTableRow key={row.lid}>
                  <StyledTableCell align="center">{row.lid}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.applyDate}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.noOfDays}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.From}</StyledTableCell>
                  <StyledTableCell align="center">{row.To}</StyledTableCell>
                  <StyledTableCell align="center">{row.Reason}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.HODApproval}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.PrincipalApproval}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography sx={labelStyle}>No. of AL: 0</Typography>
        <Typography sx={headStyle}>Duty Leave Details</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">LID</StyledTableCell>
                <StyledTableCell align="center">Apply Date</StyledTableCell>
                <StyledTableCell align="center">No of Days</StyledTableCell>
                <StyledTableCell align="center">From</StyledTableCell>
                <StyledTableCell align="center">To</StyledTableCell>
                <StyledTableCell align="center">Reason</StyledTableCell>
                <StyledTableCell align="center">HOD Approval</StyledTableCell>
                <StyledTableCell align="center">
                  Principal Approval
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {casualLeaveDummyData.map((row) => (
                <StyledTableRow key={row.lid}>
                  <StyledTableCell align="center">{row.lid}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.applyDate}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.noOfDays}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.From}</StyledTableCell>
                  <StyledTableCell align="center">{row.To}</StyledTableCell>
                  <StyledTableCell align="center">{row.Reason}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.HODApproval}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.PrincipalApproval}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography sx={labelStyle}>No. of DL: 0</Typography>
      </Grid>
    </Grid>
  );
};

export default StaffHome;
