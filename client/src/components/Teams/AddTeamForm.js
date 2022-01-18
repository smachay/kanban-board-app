import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export const AddTeamForm = (props) => {
  const [name, setName] = useState(" ");

  const handleClose = () => {
    props.close(name);
  };

  const addTeam = () => {
    const teamName = name;
    //console.log(teamName);
    //passing new teams name to the parent component
    handleClose(teamName);
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
