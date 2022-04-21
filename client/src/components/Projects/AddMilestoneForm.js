import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  Typography,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export const AddMilestoneForm = (props) => {
  const [name, setName] = useState(" ");

  const handleClose = (option) => {
    //passing new milestone name to the parent component
    if (option === "close") {
      props.close(" ");
    } else if (option === "add") {
      props.close(name);
    }
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
        <Button onClick={handleClose.bind(this, "add")}>
          Dodaj nowy kamień milowy
        </Button>
        <Button onClick={handleClose.bind(this, "close")}>Anuluj</Button>
      </DialogActions>
    </Dialog>
  );
};
