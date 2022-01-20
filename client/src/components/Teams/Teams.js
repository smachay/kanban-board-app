import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { AddTeamForm } from "./AddTeamForm";
import nextId from "react-id-generator";
import { AddEmployeeForm } from "./AddEmployeeForm";
import RemoveEmployeeForm from "./RemoveEmployeeForm";
import AddMilestonesForm from "./AddMilestonesForm";

const teams = [
  {
    teamId: 1,
    name: "Zespół 1",
  },
  {
    teamId: 2,
    name: "Zespół 2",
  },
  {
    teamId: 3,
    name: "Zespół 3",
  },
];


/*
  Do <AddEmployeeForm> musisz podpiąć array z użytkownikami którzy nie mająprzypisanego zespołu
  Do <RemoveEmployeeForm> array członków zespołu
*/
const Teams = (props) => {
  const [user] = useState(props.user);
  const [teamsList, setTeamsList] = useState(teams);
  const [selectedTeamId, setSelectedTeamId] = useState(0);
  //const [listOfIds, setListOfIds] = useState([]);
  const [openAddTeam, setOpenAddTeam] = useState(false);
  const [openAddEmployee, setOpenAddEmployee] = useState(false);
  const [openRemoveEmployee, setOpenRemoveEmployee] = useState(false);
  const [openMilestonesForm, setOpenMilestonesForm] = useState(false);

  const [employees, setEmployees] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [milestones, setMilestones] = useState([]);
  const [freeMilestones, setFreeMilestones] = useState([]);
  //const [teams, setTeams] = useState([]);

  useEffect(()=>{
    reloadEmployees();

    reloadMilestones();

   fetch('http://localhost:3001/teams/', {
      method: 'get',
      headers: {'Content-Type':'application/json'}
   }).then(resp=>resp.json()).then(employeesList=>{
     let t = [];
     employeesList.forEach(x=>{
        t.push({
          teamId: x.team_id,
          name: x.name
        })
     })
     setTeamsList(t);
   })

  },[]);

  const reloadEmployees = ()=>{
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
          teamId: employee.team_id
        })
     })
     setEmployees(t);
   })
  }

  const reloadMilestones = ()=>{
    fetch('http://localhost:3001/milestones/', {
      method: 'get',
      headers: {'Content-Type':'application/json'}
   }).then(resp=>resp.json()).then(employeesList=>{
     let t = [];
     employeesList.forEach(x=>{
        t.push({
          milestoneId: x.milestone_id,
          name: x.name,
          teamId: x.team_id
        })
     })
     setMilestones(t);
   })
  }

  const removeTeam = (id) => {
    setTeamsList(teamsList.filter((team) => team.teamId !== id));
    //call api
  };

  const openAddTeamForm = (id) => {
    setOpenAddTeam(true);
  };

  const closeAddTeamForm = (teamName) => {
    setOpenAddTeam(false);
    //call api
    setTeamsList([...teamsList, { teamId: nextId(), name: teamName }]);
  };

  const handleAddEmployeeForm = (id) => {
    setSelectedEmployees(employees.filter(employee=>employee.teamId == null))
    setOpenAddEmployee(!openAddEmployee);
    setSelectedTeamId(id);
  };

  const handleRemoveEmployeeForm = (id) => {
    setSelectedEmployees(employees.filter(employee=>employee.teamId == id))
    setOpenRemoveEmployee(!openRemoveEmployee);
    setSelectedTeamId(id);
  };

  const handleMilestonesForm = (id) => {
    setFreeMilestones(milestones.filter(milestone=>milestone.teamId == null))
    setOpenMilestonesForm(!openMilestonesForm);
    setSelectedTeamId(id);
  };

  const removeEmployees = (teamId, ids) => {
    //usuwanie zaznaczonych pracowników z zespołu
    //call api
    //console.log("Team id " + teamId);
    //console.log("List of ids " + ids);
    ids.forEach(id => {
      fetch('http://localhost:3001/employees', {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify({"employee_id":id,"team_id":teamId})
     })
    });
    reloadEmployees();
  };

  const addEmployees = (teamId, ids) => {

    //dodawanie zaznaczonych pracowników do zespołu
    ids.forEach(id => {
      fetch('http://localhost:3001/employees', {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify({"employee_id":id,"team_id":teamId})
     })
    });

    //console.log("Team id " + teamId);
    //console.log("List of ids " + ids);
    reloadEmployees();
  };

  const addMilestones = (ids) => {
    //call api
    //console.log("Team id " + selectedTeamId);
    //console.log("List of ids " + ids);
    ids.forEach(id => {
      fetch('http://localhost:3001/milestones', {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify({"milestone_id":id,"team_id":selectedTeamId})
     })
    });
    reloadMilestones();
  };

  //get the list of employee ids that need to be added or removed from the team
  const getEmployeeIds = (ids, action) => {
    if (action === "r") {
      removeEmployees(selectedTeamId, ids);
    } else if (action === "a") {
      addEmployees(selectedTeamId, ids);
    }
  };

  return (
    <div>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <b>Nazwa</b>
              </TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teamsList.map((row) => (
              <TableRow
                key={row.teamId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">
                  <Button onClick={removeTeam.bind(this, row.teamId)}>
                    Usuń zespół
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button
                    onClick={handleAddEmployeeForm.bind(this, row.teamId)}
                  >
                    Dodaj pracowników
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button
                    onClick={handleRemoveEmployeeForm.bind(this, row.teamId)}
                  >
                    Usuń pracowników
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button onClick={handleMilestonesForm.bind(this, row.teamId)}>
                    Przypisz kamienie milowe
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <Box sx={{ m: 1 }}>
            <Button onClick={openAddTeamForm.bind(this)}>
              Dodaj nowy zespół
            </Button>
          </Box>
        </Table>
      </TableContainer>
      <AddTeamForm open={openAddTeam} close={closeAddTeamForm.bind(this)} />
      <AddEmployeeForm
        user={user}
        employees={selectedEmployees}
        parentCallback={getEmployeeIds}
        open={openAddEmployee}
        close={handleAddEmployeeForm.bind(this)}
      />
      <RemoveEmployeeForm
        user={user}
        employees={selectedEmployees}
        parentCallback={getEmployeeIds}
        open={openRemoveEmployee}
        close={handleRemoveEmployeeForm.bind(this)}
      />
      <AddMilestonesForm
        user={user}
        milestones={freeMilestones}
        parentCallback={addMilestones}
        open={openMilestonesForm}
        close={handleMilestonesForm.bind(this)}
      />
    </div>
  );
};

export default Teams;
