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
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import ListOfMilestones from "../Lists/ListOfMilestones";

function createData(id, name) {
  return { id, name };
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
  const [projectId, setProjectId] = useState(null);

  const showMilestones = (projectId) => {
    setProjectId(projectId);
    setOpenMilestones(!openMilestones);
  };
  const [projects, setProjects] = useState([]);


  useEffect(() => {
      let url
      if(props.user.jobId === 1){
          url = 'http://localhost:3001/projects'
      }else{
          url = 'http://localhost:3001/milestones?userId=' + props.user.id
      }
      fetch(url, {
        method: 'get',
        headers: {'Content-Type':'application/json'}
     }).then(resp=>resp.json()).then(
       x=>{
         let t = [];
         x.forEach(user => {
           console.log(user);
        t.push(createData(user.project_id, user.project_name))
      })
      setProjects(t);
    }
      )
    }, []);


  const addMilestone = (name) => {
    milestones.push({
      milestoneId: null,
      name: name,
      teamName: null,
      projectId: projectId,
    });
    console.log(milestones);
  };

  return (
    <div>
      {openMilestones === true ? (
        <ListOfMilestones
          update={addMilestone}
          user={props.user}
          view={2}
          milestones={milestones}
        />
      ) : (
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
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">
                    <Button onClick={showMilestones.bind(this, row.id)}>
                      Wyświetl kamienie milowe
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Projects;
