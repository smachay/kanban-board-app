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

export const AddTeamForm = (props) => {
  const [name, setName] = useState(" ");
  const [id, setId] = useState(0);

  const handleClose = () => {
    props.close(name, id);
  };
  const handleChange = (event) => {
    setId(event.target.value);
  };

  const addTeam = () => {
    //passing new teams name to the parent component
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
          <b>Podaj nazwę nowego zespołu</b>
        </Typography>
        <TextField
          onChange={(event) => setName(event.target.value)}
          fullWidth
        />
        <InputLabel>Team leader</InputLabel>
        <Select label="Team leader" onChange={handleChange}>
          {props.teamLeaders.map((row) => (
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
        <Button onClick={addTeam}>Dodaj nowy zespół</Button>
        <Button onClick={handleClose}>Anuluj</Button>
      </DialogActions>
    </Dialog>
  );
};
