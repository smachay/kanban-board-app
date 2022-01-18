import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

/*
Reusable component for displaying list of employees
in:  employees - array of employees
out: updated list of employees
*/
const Employees = (props) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    console.log("dziala");
    if (typeof props.employees !== "undefined") {
      setEmployees(props.employees);
    } else {
      setEmployees([
        {
          id: " ",
          firstName: " ",
          lastName: " ",
          email: " ",
          jobTitle: " ",
        },
      ]);
    }
  });

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <b>Imie</b>
            </TableCell>
            <TableCell align="left">
              <b>Nazwisko</b>
            </TableCell>
            <TableCell align="left">
              <b>Email</b>
            </TableCell>
            <TableCell align="left">
              <b>Stanowisko</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="left">{row.lastName}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.jobTitle}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <Box sx={{ m: 1 }}>
          {props.user.jobId === 1 ? (
            <Button>Dodaj nowego pracownika</Button>
          ) : (
            <div></div>
          )}
        </Box>
      </Table>
    </TableContainer>
  );
};

export default Employees;
