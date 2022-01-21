import React, { useEffect, useState } from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Task = (props) => {
  const [open, setOpen] = useState(false);
  const [showTask, setShowTask] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const loadInfo = () => {
    return (
      <div>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Info" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div">
            <Typography>Programista:{props.developer}</Typography>
            {props.status !== 1 ? (
              <Typography>Tester:{props.tester}</Typography>
            ) : (
              <div></div>
            )}
          </List>
        </Collapse>
      </div>
    );
  };

  const loadDeveloper = () => {
    return (
      <div>
        <ListItemButton>
          <ListItemText
            onClick={props.changeStatus.bind(this, props.taskId, 2)}
            primary="Zatwierdź"
          />
        </ListItemButton>
      </div>
    );
  };
  const loadTester = () => {
    return (
      <div>
        <ListItemButton>
          <ListItemText
            onClick={props.changeStatus.bind(this, props.taskId, 4)}
            primary="Zatwierdź"
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemText
            onClick={props.changeStatus.bind(this, props.taskId, 3)}
            primary="Odrzuć"
          />
        </ListItemButton>
      </div>
    );
  };

  return (
    <Paper display="flex" sx={{ m: 1, p: 1 }}>
      <Typography align="center">{props.name}</Typography>
      <List sx={{ width: "100%" }} component="nav">
        {(props.status === 1 &&
          props.user.jobId === 3 &&
          props.user.id === props.developerId) ||
        (props.status === 3 &&
          props.user.jobId === 3 &&
          props.user.id === props.developerId)
          ? loadDeveloper()
          : " "}
        {props.status === 2 &&
        props.user.jobId === 4 &&
        props.user.id === props.testerId
          ? loadTester()
          : " "}
        {props.status !== 0 ? loadInfo() : " "}
      </List>
    </Paper>
  );
};

export default Task;

/*
  const [open, setOpen] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [status, setStatus] = useState(0);
  const [name, setName] = useState(0);
  const [developer, setDeveloper] = useState(0);
  const [developerId, setDeveloperId] = useState(0);
  const [tester, setTester] = useState(0);
  const [testerId, setTesterId] = useState(0);
  const [note, setNote] = useState(0);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (user === {}) {
      setStatus(props.task.status);
      setName(props.task.name);
      setDeveloper(props.task.developer);
      setDeveloperId(props.task.developerId);
      setTester(props.task.tester);
      setTesterId(props.task.testerId);
      setNote(props.task.note);
      setUser(props.user);
      setShowTask(true);
    }
  });
  */
