import {
  Button,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box, width } from "@mui/system";
import React, { useEffect, useState } from "react";

/*
Reusable component for displaying list of employees
in:  employees - array of employees
out: updated list of employees or list of employees ids 
*/
const ListOfEmployees = (props) => {
  const [employees, setEmployees] = useState([]);
  const [checkedEmployees, setCheckedEmployees] = useState([]);
  const [view, setView] = useState();

  const [user] = useState(props.user);

  useEffect(() => {
    if (typeof props.onChange === "undefined") {
    }

    if (typeof props.employees !== "undefined") {
      setEmployees(props.employees);
    } else {
      setEmployees([
        {
          employeeId: " ",
          firstName: " ",
          lastName: " ",
          email: " ",
          jobId: " ",
          jobTitle: " ",
        },
      ]);
    }

    if (typeof props.view !== "undefined") {
      setView(props.view);
    } else {
      setView(0);
    }

    props.onChange(checkedEmployees);
  }, [checkedEmployees]);

  const setJobTitle = (id) => {
    switch (id) {
      case 1:
        return "Manager";

      case 2:
        return "Team leader";

      case 3:
        return "Programista";

      case 4:
        return "Tester";

      default:
        return "";
    }
  };

  const checkboxChange = (id) => {
    if (checkedEmployees.includes(id) === true) {
      setCheckedEmployees(checkedEmployees.filter((item) => item !== id));
    } else {
      setCheckedEmployees([...checkedEmployees, id]);
    }
  };

  //const setCheckedEmployees = (event) => {};
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
              <b>Stanowisko</b>
            </TableCell>
            <TableCell align="left">
              {view !== 1 ? <b>Email</b> : <div></div>}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((row) => (
            <TableRow
              key={row.employeeId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row">{row.firstName}</TableCell>
              <TableCell align="left">{row.lastName}</TableCell>
              <TableCell align="left">
                {typeof row.jobTitle !== "undefined"
                  ? row.jobTitle
                  : setJobTitle(row.jobId)}
              </TableCell>
              {view !== 1 ? (
                <TableCell align="left">{row.email}</TableCell>
              ) : (
                <TableCell align="left">
                  <Checkbox
                    onChange={checkboxChange.bind(this, row.employeeId)}
                  />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
        <Box sx={{ m: 1 }}>
          {user.jobId === 1 && view !== 1 ? (
            <Button>Dodaj</Button>
          ) : (
            <div></div>
          )}
        </Box>
      </Table>
    </TableContainer>
  );
};

export default ListOfEmployees;
