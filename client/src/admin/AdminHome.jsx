import { Grid } from "@mui/material";
import React from "react";
import tech from "../data/tech.json";
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

const AdminHome = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        heading
      </Grid>
      <Grid item xs={12} sx={{ padding: "3px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Designation</StyledTableCell>
                <StyledTableCell align="center">Department</StyledTableCell>
                <StyledTableCell align="center">Email Address</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {tech.map((row) => (
                <StyledTableRow key={row["Sl NO "]}>
                  <StyledTableCell align="center">{row.Name}</StyledTableCell>
                  <StyledTableCell align="center">{row.Design}</StyledTableCell>
                  <StyledTableCell align="center">{row.Dept}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row["EMAIL ID "]}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default AdminHome;
