import { Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Task from "./Task";
const tasks = [
  {
    id: 0,
    name: "test",
    status: 0,
    developer: "Stefan",
    developerId: null,
    tester: "Karol",
    testerId: null,
    note: " ",
  },
  {
    id: 1,
    name: "test",
    status: 1,
    developer: "Stefan",
    developerId: 3,
    tester: "Karol",
    testerId: 4,
    note: " ",
  },
  {
    id: 2,
    name: "test",
    status: 2,
    developer: "Stefan",
    developerId: 3,
    tester: "Karol",
    testerId: 4,
    note: "",
  },
  {
    id: 3,
    name: "test",
    status: 3,
    developer: "Stefan",
    developerId: 3,
    tester: "Karol",
    testerId: 4,
    note: "tabele przechowują dane w sposób atomowy, czyli każde pole przechowuje",
  },
  {
    id: 4,
    name: "test",
    status: 4,
    developer: "Stefan",
    developerId: 3,
    tester: "Karol",
    testerId: 4,
    note: "tabele przechowują dane w sposób atomowy, czyli każde pole przechowuje",
  },
];
const KanbanBoard = (props) => {
  const [milestoneId] = useState(props.milestoneId);
  const [milestoneName, setMilestoneName] = useState(
    "Webowa aplikacja kliencka"
  );
  const [projectName, setProjectName] = useState(
    "Aplikacja do obsługi klientów"
  );
  const changeStatus = (id, status) => {
    console.log("id tasku:" + id);
    console.log("nowy stan:" + status);
  };

  return (
    <Grid container direction="column">
      <Paper sx={{ mb: 1, mb: 2, p: 1 }}>
        <Typography>
          <b>Projekt:</b>
          {projectName}
        </Typography>
        <Typography>
          <b>Kamień milowy:</b>
          {milestoneName}
        </Typography>
      </Paper>
      <Grid container direction="row" justifyContent="center">
        <Grid xs={2}>
          <b>Nieprzypisane</b>
          {tasks
            .filter((obj) => obj.status === 0)
            .map((obj) => {
              return <Task user={props.user} status={obj.status} />;
            })}
        </Grid>
        <Grid xs={2}>
          <b>W trakcie</b>
          {tasks
            .filter((obj) => obj.status === 1)
            .map((obj) => {
              return (
                <Task
                  user={props.user}
                  taskId={obj.id}
                  status={obj.status}
                  developer={obj.developer}
                  developerId={obj.developerId}
                  changeStatus={changeStatus}
                />
              );
            })}
        </Grid>
        <Grid xs={2}>
          <b>Do testu</b>
          {tasks
            .filter((obj) => obj.status === 2)
            .map((obj) => {
              return (
                <Task
                  user={props.user}
                  taskId={obj.id}
                  status={obj.status}
                  testerId={obj.testerId}
                  tester={obj.tester}
                  developer={obj.developer}
                  developerId={obj.developerId}
                  changeStatus={changeStatus}
                />
              );
            })}
        </Grid>
        <Grid xs={2}>
          <b>Do poprawy</b>
          {tasks
            .filter((obj) => obj.status === 3)
            .map((obj) => {
              return (
                <Task
                  user={props.user}
                  status={obj.status}
                  taskId={obj.id}
                  tester={obj.tester}
                  testerId={obj.testerId}
                  developer={obj.developer}
                  developerId={obj.developerId}
                  changeStatus={changeStatus}
                />
              );
            })}
        </Grid>
        <Grid xs={2}>
          <b>Wykonane</b>
          {tasks
            .filter((obj) => obj.status === 4)
            .map((obj) => {
              return (
                <Task
                  user={props.user}
                  status={obj.status}
                  testerId={obj.testerId}
                  developer={obj.developer}
                  tester={obj.tester}
                  developerId={obj.developerId}
                />
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default KanbanBoard;
