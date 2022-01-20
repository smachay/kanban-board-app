import React from "react";
import ListOfEmployees from "../Lists/ListOfEmployees";

const employees = [
  {
    employeeId: 1,
    jobId: 3,
    firstName: "Franek",
    lastName: "Bor",
    email: "Franek@gmail.com",
  },
  {
    employeeId: 2,
    jobId: 3,
    firstName: "Kamil",
    lastName: "Wiśnia",
    email: "Franek@gmail.com",
  },
  {
    employeeId: 3,
    jobId: 4,
    firstName: "Piotrek",
    lastName: "Brzoza",
    email: "Franek@gmail.com",
  },
  {
    employeeId: 4,
    jobId: 4,
    firstName: "Karol",
    lastName: "Drwal",
    email: "Franek@gmail.com",
  },
];
const Employees = (props) => {
  const addEmployee = (user) => {
    employees.push(user);
  };

  return (
    <ListOfEmployees
      addEmployee={addEmployee.bind(this)}
      employees={employees}
      user={props.user}
    />
  );
};

export default Employees;
