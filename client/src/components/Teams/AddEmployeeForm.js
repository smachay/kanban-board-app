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

export const AddEmployeeForm = (props) => {
  const handleClose = () => {
    props.close();
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
          <b>Wybierz pracownika</b>
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button>Dodaj nowy zespół</Button>
        <Button onClick={handleClose}>Anuluj</Button>
      </DialogActions>
    </Dialog>
  );
};
