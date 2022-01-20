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

export const AddMilestoneForm = (props) => {
  const [name, setName] = useState(" ");

  const handleClose = () => {
    props.close(name);
  };

  const addMilestone = () => {
    //passing new milestone name to the parent component
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
          <b>Podaj nazwę nowego kamienia milowego</b>
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
        <Button onClick={addMilestone}>Dodaj nowy kamień milowy</Button>
        <Button onClick={handleClose}>Anuluj</Button>
      </DialogActions>
    </Dialog>
  );
};
