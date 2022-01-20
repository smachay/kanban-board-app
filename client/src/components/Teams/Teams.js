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
import AddMilestoneForm from "./AddMilestonesForm";
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
/*
  Do <AddEmployeeForm> musisz podpiąć array z użytkownikami którzy nie mająprzypisanego zespołu
  Do <RemoveEmployeeForm> array członków zespołu
*/
const Teams = (props) => {
  const [teamsList, setTeamsList] = useState(teams);
  const [listOfIds, setListOfIds] = useState([]);
  const [openAddTeam, setOpenAddTeam] = useState(false);
  const [openAddEmployee, setOpenAddEmployee] = useState(false);
  const [openRemoveEmployee, setOpenRemoveEmployee] = useState(false);
  const [openMilestonesForm, setOpenMilestonesForm] = useState(false);
  useEffect(() => {
    //console.log(listOfIds);
  }, [listOfIds]);

  const removeTeam = (id) => {
    setTeamsList(teamsList.filter((team) => team.teamId !== id));
    //call api
  };

  const openAddTeamForm = () => {
    setOpenAddTeam(true);
  };

  const closeAddTeamForm = (teamName) => {
    setOpenAddTeam(false);

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
        user={props.user}
        employees={employees}
        parentCallback={getEmployeeIds}
        open={openAddEmployee}
        close={handleAddEmployeeForm.bind(this)}
      />
      <RemoveEmployeeForm
        user={props.user}
        employees={employees}
        parentCallback={getEmployeeIds}
        open={openRemoveEmployee}
        close={handleRemoveEmployeeForm.bind(this)}
      />
      <AddMilestonesForm
        parentCallback={getEmployeeIds}
        open={openMilestonesForm}
        close={handleMilestonesForm.bind(this)}
      />
    </div>
  );
};

export default Teams;
