import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { AddTeamForm } from "./AddTeamForm";
import nextId from "react-id-generator";
import { AddEmployeeForm } from "./AddEmployeeForm";

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

const Teams = (props) => {
  const [teamsList, setTeamsList] = useState(teams);
  const [openAddTeam, setOpenAddTeam] = useState(false);
  const [openAddEmployee, setOpenAddEmployee] = useState(false);

  const removeTeam = (id) => {
    setTeamsList(teamsList.filter((team) => team.teamId !== id));
    //call api
  };

  const openAddTeamForm = () => {
    setOpenAddTeam(true);
  };

  const closeAddTeamForm = (teamName) => {
    setOpenAddTeam(false);

    let newTeamsList = [...teamsList];
    newTeamsList.push({ teamId: nextId(), name: teamName });

    //call api
    setTeamsList(newTeamsList);
  };

  const openAddEmployeeForm = () => {
    setOpenAddEmployee(true);
  };

  const closeAddEmployeeForm = (employee) => {
    setOpenAddEmployee(false);
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
                  <Button onClick={openAddEmployeeForm.bind(this)}>
                    Dodaj pracownika
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button>Usuń pracownika</Button>
                </TableCell>
                <TableCell align="left">
                  <Button>Przypisz kamienie milowe</Button>
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
        open={openAddEmployee}
        close={closeAddEmployeeForm.bind(this)}
      />
    </div>
  );
};

export default Teams;
