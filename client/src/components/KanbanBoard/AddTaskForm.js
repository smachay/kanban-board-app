import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  TextField,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export const AddTaskForm = (props) => {
  const [name, setName] = useState(" ");
  const [developerId, setDeveloperId] = useState(0);
  const [testerId, setTesterId] = useState(0);

  const handleClose = () => {
    props.close();
  };
  const handleDeveloper = (event) => {
    setDeveloperId(event.target.value);
  };
  const handleTester = (event) => {
    setTesterId(event.target.value);
  };

  const addTask = () => {
    //passing new task name to the parent component
    props.addTask(name, developerId, testerId);
    handleClose();
  };

  return (
    <Dialog open={props.open}>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minWidth: 330,
          p: 4,
        }}
      >
        <Typography>
          <b>Podaj nazwę zadania</b>
        </Typography>
        <TextField
          onChange={(event) => setName(event.target.value)}
          fullWidth
        />
        <InputLabel>Team leader</InputLabel>
        <Select label="Programista" onChange={handleDeveloper}>
          {props.teamDevelopers.map((row) => (
            <MenuItem value={row.employeeId}>
              {row.firstName} {row.lastName}
            </MenuItem>
          ))}
        </Select>
        <Select label="Tester" onChange={handleTester}>
          {props.teamTesters.map((row) => (
            <MenuItem value={row.employeeId}>
              {row.firstName} {row.lastName}
            </MenuItem>
          ))}
        </Select>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button onClick={addTask}>Dodaj nowy zespół</Button>
        <Button onClick={handleClose}>Anuluj</Button>
      </DialogActions>
    </Dialog>
  );
};
