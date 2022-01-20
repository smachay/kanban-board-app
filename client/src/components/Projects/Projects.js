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
import { Box } from "@mui/system";
import { BrowserRouter, Routes } from "react-router-dom";
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

  const [milestones, setMilestones] = useState([]);

  const showMilestones = (projectId) => {
    setProjectId(projectId);
    setOpenMilestones(!openMilestones);
  };
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    loadProjects();
    loadMilestones();
    }, []);


  const loadMilestones = ()=>{
    fetch('http://localhost:3001/milestones', {
      method: 'get',
      headers: {'Content-Type':'application/json'}
   }).then(resp=>resp.json()).then(result=>{
     let x = [];
     result.forEach(element => {
       x.push({
        milestoneId: element.milestone_id,
        name: element.name,
        teamId: element.team_id,
        teamName: element.team_name,
        projectId: element.project_id,
       })
     });
     setMilestones(x);
   })
  }

  const loadProjects = ()=>{
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
  }

  const addMilestone = (name) => {

    fetch('http://localhost:3001/milestones', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({
        "name":name,
        "project_id": projectId
   })
  }).then(()=>{
    loadMilestones();
  });
}

  const handleAddProject = () => {
    setOpenAddProject(!openAddProject);
  };

  const addProject = (name) => {
    console.log("project", name)
    fetch('http://localhost:3001/projects', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({
        "name":name,
   })
  }).then(()=>{
    loadProjects();
  });


  };

  return (
    <div>
      {openMilestones === true ? (
        <ListOfMilestones
          update={addMilestone}
          user={props.user}
          view={2}
          milestones={milestones.filter(m=>m.projectId == projectId)}
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
                  </TableRow>
                ))}
              </TableBody>
              <Box sx={{ m: 1 }}>
                <Button onClick={handleAddProject.bind(this)}>
                  Dodaj nowy projekt
                </Button>
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
