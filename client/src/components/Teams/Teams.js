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
<<<<<<< HEAD
import AddMilestoneForm from "./AddMilestonesForm";
=======
>>>>>>> main
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

const employees = [
  {
    employeeId: 1,
    jobId: 3,
    firstName: "Franek",
    lastName: "Bor",
  },
  {
    employeeId: 2,
    jobId: 3,
    firstName: "Kamil",
    lastName: "Wiśnia",
  },
  {
    employeeId: 3,
    jobId: 4,
    firstName: "Piotrek",
    lastName: "Brzoza",
  },
  {
    employeeId: 4,
    jobId: 4,
    firstName: "Karol",
    lastName: "Drwal",
  },
];
<<<<<<< HEAD
=======

const milestones = [
  {
    milestoneId: 1,
    name: "Dodanie przycisków na stronie głównej",
  },
  {
    milestoneId: 2,
    name: "Strona klienta",
  },
];
>>>>>>> main
/*
  Do <AddEmployeeForm> musisz podpiąć array z użytkownikami którzy nie mająprzypisanego zespołu
  Do <RemoveEmployeeForm> array członków zespołu
*/
const Teams = (props) => {
  const [user] = useState(props.user);
  const [teamsList, setTeamsList] = useState(teams);
<<<<<<< HEAD
  const [listOfIds, setListOfIds] = useState([]);
=======
  const [selectedTeamId, setSelectedTeamId] = useState(0);
  //const [listOfIds, setListOfIds] = useState([]);
>>>>>>> main
  const [openAddTeam, setOpenAddTeam] = useState(false);
  const [openAddEmployee, setOpenAddEmployee] = useState(false);
  const [openRemoveEmployee, setOpenRemoveEmployee] = useState(false);
  const [openMilestonesForm, setOpenMilestonesForm] = useState(false);
<<<<<<< HEAD
  useEffect(() => {
    //console.log(listOfIds);
  }, [listOfIds]);
=======
>>>>>>> main

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

<<<<<<< HEAD
    //call api
    setTeamsList([...teamsList, { teamId: nextId(), name: teamName }]);
  };

  const handleAddEmployeeForm = () => {
    setOpenAddEmployee(!openAddEmployee);
  };

  const handleRemoveEmployeeForm = () => {
    setOpenRemoveEmployee(!openRemoveEmployee);
  };

  const handleMilestonesForm = () => {
    setOpenMilestonesForm(!openMilestonesForm);
  };

  //get the list of employee ids that need to be added or removed from the team
  const getEmployeeIds = (ids) => {
    //tu jest taki problem, że ids przychodzi aktualne, ale useState aktualizuje się dopiero przy renderze
    setListOfIds(ids);

    //call api
=======
  const handleAddEmployeeForm = (id) => {
    setOpenAddEmployee(!openAddEmployee);
    setSelectedTeamId(id);
  };

  const handleRemoveEmployeeForm = (id) => {
    setOpenRemoveEmployee(!openRemoveEmployee);
    setSelectedTeamId(id);
  };

  const handleMilestonesForm = (id) => {
    setOpenMilestonesForm(!openMilestonesForm);
    setSelectedTeamId(id);
  };

  const removeEmployees = (teamId, ids) => {
    //usuwanie zaznaczonych pracowników z zespołu
    //call api
    //console.log("Team id " + teamId);
    //console.log("List of ids " + ids);
  };

  const addEmployees = (teamId, ids) => {
    //dodawanie zaznaczonych pracowników do zespołu
    //call api
    //console.log("Team id " + teamId);
    //console.log("List of ids " + ids);
  };

  const addMilestones = (ids) => {
    //call api
    //console.log("Team id " + selectedTeamId);
    //console.log("List of ids " + ids);
  };

  //get the list of employee ids that need to be added or removed from the team
  const getEmployeeIds = (ids, action) => {
    if (action === "r") {
      removeEmployees(selectedTeamId, ids);
    } else if (action === "a") {
      addEmployees(selectedTeamId, ids);
    }
>>>>>>> main
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
<<<<<<< HEAD
                  <Button onClick={handleAddEmployeeForm.bind(this)}>
                    Dodaj pracownika
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button onClick={handleRemoveEmployeeForm.bind(this)}>
                    Usuń pracownika
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button onClick={handleMilestonesForm.bind(this)}>
=======
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
>>>>>>> main
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
<<<<<<< HEAD
        user={props.user}
=======
        user={user}
>>>>>>> main
        employees={employees}
        parentCallback={getEmployeeIds}
        open={openAddEmployee}
        close={handleAddEmployeeForm.bind(this)}
      />
      <RemoveEmployeeForm
<<<<<<< HEAD
        user={props.user}
=======
        user={user}
>>>>>>> main
        employees={employees}
        parentCallback={getEmployeeIds}
        open={openRemoveEmployee}
        close={handleRemoveEmployeeForm.bind(this)}
      />
      <AddMilestonesForm
<<<<<<< HEAD
        parentCallback={getEmployeeIds}
=======
        user={user}
        milestones={milestones}
        parentCallback={addMilestones}
>>>>>>> main
        open={openMilestonesForm}
        close={handleMilestonesForm.bind(this)}
      />
    </div>
  );
};

export default Teams;
