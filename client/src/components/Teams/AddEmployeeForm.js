import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ListOfEmployees from "../ListOfEmployees/ListOfEmployees";

export const AddEmployeeForm = (props) => {
  const handleClose = () => {
    props.close();
  };

  return (
    <Dialog maxWidth="xl" open={props.open}>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Typography>
          <b>Wybierz pracownika</b>
        </Typography>
        <ListOfEmployees
          user={props.user}
          view={1}
          employees={props.employees}
        />
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
