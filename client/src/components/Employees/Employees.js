import React, {useState, useEffect} from "react";
import ListOfEmployees from "../Lists/ListOfEmployees";

/*const employees = [
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
];*/
const Employees = (props) => {

  const [employees, setEmployees] = useState([]);

  useEffect(()=>{
      fetch('http://localhost:3001/employees/', {
        method: 'get',
        headers: {'Content-Type':'application/json'}
     }).then(resp=>resp.json()).then(employeesList=>{
       let t = [];
       employeesList.forEach(employee=>{
          t.push({
            employeeId: employee.employee_id,
            jobId: employee.job_id,
            firstName: employee.first_name,
            lastName: employee.last_name,
            email: employee.email
          })
       })
       console.log(t);
       setEmployees(t);
     })
  },[]);


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
