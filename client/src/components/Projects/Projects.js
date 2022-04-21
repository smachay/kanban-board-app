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
import React, { useState } from "react";
import ListOfMilestones from "../Lists/ListOfMilestones";
import { AddProjectForm } from "./AddProjectForm";

function createData(projectId, name) {
  return { projectId, name };
}

const projects = [
  createData(1, "Aplikacja dla wojska"),
  createData(2, "Aplikacja mobilna dla firmy ogrodniczej"),
  createData(3, "Aplikacj To-Do"),
];
const milestones = [
  {
    milestoneId: 1,
    name: "Dodanie przycisków na stronie głównej",
    teamName: "zespół 1",
    projectId: 1,
  },
  {
    milestoneId: 2,
    name: "Strona klienta",
    teamName: null,
    projectId: 1,
  },
];

const Projects = (props) => {
  const [openMilestones, setOpenMilestones] = useState(false);
  const [openAddProject, setOpenAddProject] = useState(false);
  const [projectId, setProjectId] = useState(null);

  const endProject = (id) => {
    console.log("Zakończony projekt:" + id);
  };

  const showMilestones = (projectId) => {
    setProjectId(projectId);
    setOpenMilestones((currOpenMilestones) => !currOpenMilestones);
  };

  const addMilestone = (name) => {
    console.log("Dodano nowy kamień milowy:" + name);
    //call
  };

  const handleAddProject = () => {
    setOpenAddProject((currOpenAddProject) => !currOpenAddProject);
  };

  const addProject = (name) => {
    console.log("Dodano nowy projekt:" + name);
    //call api
  };

  return (
    <div>
      {openMilestones === true ? (
        <ListOfMilestones
          update={addMilestone}
          user={props.user}
          milestones={milestones}
        />
      ) : (
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Nazwa projektu</b>
                  </TableCell>
                  <TableCell align="left">
                    <b></b>
                  </TableCell>
                  <TableCell align="left">
                    <b></b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projects.map((row) => (
                  <TableRow
                    key={row.projectId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        onClick={showMilestones.bind(this, row.projectId)}
                      >
                        Wyświetl kamienie milowe
                      </Button>
                    </TableCell>
                    <TableCell align="left">
                      {props.user.jobId === 1 ? (
                        <Button onClick={endProject.bind(this, row.projectId)}>
                          Zakończ projekt
                        </Button>
                      ) : (
                        " "
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <Box sx={{ m: 1 }}>
                {props.user.jobId === 1 ? (
                  <Button onClick={handleAddProject.bind(this)}>
                    Dodaj nowy projekt
                  </Button>
                ) : (
                  " "
                )}
              </Box>
            </Table>
          </TableContainer>
          <AddProjectForm
            open={openAddProject}
            update={addProject}
            close={handleAddProject}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
