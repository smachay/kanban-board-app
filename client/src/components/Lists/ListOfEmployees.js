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
import { AddEmployeeForm } from "../Employees/AddEmployeeForm";

const jobTitles = {
  1: "Manager",
  2: "Team leader",
  3: "Programista",
  4: "Tester",
};

/*
Reusable component for displaying list of employees
in:  employees - array of employees
out: updated list of employees or list of employees ids 
*/
const ListOfEmployees = (props) => {
  const [employees, setEmployees] = useState([]);
  const [openAddEmployee, setOpenAddEmployee] = useState(false);
  const [checkedEmployees, setCheckedEmployees] = useState([]);
  const [view, setView] = useState("");

  const [user] = useState(props.user);

  useEffect(() => {
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
    }

    if (props.onChange !== undefined) props.onChange(checkedEmployees);
  }, [checkedEmployees]);

  const setJobTitle = (id) => {
    return jobTitles[id] || "Brak roli";
  };

  const handleRemoveEmployee = (id) => {
    props.removeEmployee(id);
  };

  const handleAddEmployee = () => {
    setOpenAddEmployee(!openAddEmployee);
  };
  const addEmployee = (user) => {
    handleAddEmployee();
    employees.push(user);
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
    <div>
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
                {view !== "form_employee_info" ? <b>Email</b> : <div></div>}
              </TableCell>
              <TableCell align="left"></TableCell>
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
                {view !== "form_employee_info" ? (
                  <TableCell align="left">{row.email}</TableCell>
                ) : (
                  <TableCell align="left">
                    <Checkbox
                      onChange={checkboxChange.bind(this, row.employeeId)}
                    />
                  </TableCell>
                )}
                <TableCell align="left">
                  {user.jobId === 1 && view !== "form_employee_info" ? (
                    <Button
                      onClick={handleRemoveEmployee.bind(this, row.employeeId)}
                    >
                      Usuń
                    </Button>
                  ) : (
                    " "
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <Box sx={{ m: 1 }}>
            {user.jobId === 1 && view !== "form_employee_info" ? (
              <Button onClick={handleAddEmployee.bind(this)}>
                Dodaj pracownika
              </Button>
            ) : (
              <p></p>
            )}
          </Box>
        </Table>
      </TableContainer>
      <AddEmployeeForm
        open={openAddEmployee}
        addEmployee={addEmployee.bind(this)}
        close={handleAddEmployee.bind(this)}
      />
    </div>
  );
};

export default ListOfEmployees;
