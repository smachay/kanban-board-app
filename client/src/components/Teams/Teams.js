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
    teamLeaderId: null,
  },
  {
    teamId: 2,
    name: "Zespół 2",
    teamLeaderId: null,
  },
  {
    teamId: 3,
    name: "Zespół 3",
    teamLeaderId: null,
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

const Teams = (props) => {
  const [user] = useState(props.user);
  const [teamsList, setTeamsList] = useState(teams);
  const [selectedTeamId, setSelectedTeamId] = useState(0);
  const [openAddTeam, setOpenAddTeam] = useState(false);
  const [openAddEmployee, setOpenAddEmployee] = useState(false);
  const [openRemoveEmployee, setOpenRemoveEmployee] = useState(false);
  const [openMilestonesForm, setOpenMilestonesForm] = useState(false);

  const removeTeam = (id) => {
    setTeamsList((currTeamsList) =>
      currTeamsList.filter((team) => team.teamId !== id)
    );
    //call api
  };

  const openAddTeamForm = (id) => {
    setOpenAddTeam(true);
  };

  const closeAddTeamForm = (teamName, id) => {
    setOpenAddTeam(false);
    //call api
    //console.log("nazwa: " + teamName + "\n" + "id: " + id);
    setTeamsList((currTeamsList) => [
      ...currTeamsList,
      { teamId: nextId(), name: teamName, id },
    ]);
  };

  const handleAddEmployeeForm = (id) => {
    setOpenAddEmployee((currOpenAddEmployee) => !currOpenAddEmployee);
    setSelectedTeamId(id);
  };

  const handleRemoveEmployeeForm = (id) => {
    setOpenRemoveEmployee((currOpenRemoveEmployee) => !currOpenRemoveEmployee);
    setSelectedTeamId(id);
  };

  const handleMilestonesForm = (id) => {
    setOpenMilestonesForm((currOpenMilestonesForm) => !currOpenMilestonesForm);
    setSelectedTeamId(id);
  };

  //remove selected employees from the team
  const removeEmployees = (teamId, ids) => {
    //call api
  };

  //add selected employees to the team
  const addEmployees = (teamId, ids) => {
    //call api
  };

  const addMilestones = (ids) => {
    //call api
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
      <AddTeamForm
        open={openAddTeam}
        teamLeaders={employees}
        close={closeAddTeamForm.bind(this)}
      />
      <AddEmployeeForm
        user={user}
        employees={employees}
        parentCallback={getEmployeeIds}
        open={openAddEmployee}
        close={handleAddEmployeeForm.bind(this)}
      />
      <RemoveEmployeeForm
        user={user}
        employees={employees}
        parentCallback={getEmployeeIds}
        open={openRemoveEmployee}
        close={handleRemoveEmployeeForm.bind(this)}
      />
      <AddMilestonesForm
        user={user}
        milestones={milestones}
        parentCallback={addMilestones}
        open={openMilestonesForm}
        close={handleMilestonesForm.bind(this)}
      />
    </div>
  );
};

export default Teams;
