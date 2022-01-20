import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ListOfEmployees from "../ListOfEmployees/ListOfEmployees";

const RemoveEmployeeForm = (props) => {
  const [listOfIds, setListOfIds] = useState([]);

  const handleClose = () => {
    props.close();
  };

  //recives id list from list component and sends it to parent component
  const handleChildCallback = (ids) => {
    setListOfIds(ids);
  };

  const handleParentCallback = () => {
    props.parentCallback(listOfIds);
    handleClose();
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
          <b>Wybierz pracowników do usunięcia</b>
        </Typography>
        <ListOfEmployees
          user={props.user}
          view={1}
          employees={props.employees}
          onChange={handleChildCallback}
        />
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button onClick={handleParentCallback}>Usuń</Button>
        <Button onClick={handleClose}>Anuluj</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RemoveEmployeeForm;
