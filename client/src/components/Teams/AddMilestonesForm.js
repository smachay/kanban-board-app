import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ListOfMilestones from "../Lists/ListOfMilestones";

const AddMilestonesForm = (props) => {
  const [listOfIds, setListOfIds] = useState([]);

  const handleClose = () => {
    props.close();
  };

  const handleParentCallback = () => {
    props.parentCallback(listOfIds);
    handleClose();
  };

  //receives id list from list component and sends it to parent component
  const handleChildCallback = (ids) => {
    setListOfIds(ids);
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
          <b>Wybierz kamienie milowe do dodania</b>
        </Typography>
        <ListOfMilestones
          user={props.user}
          view={1}
          milestones={props.milestones}
          onChange={handleChildCallback}
        />
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button onClick={handleParentCallback}>Dodaj</Button>
        <Button onClick={handleClose}>Anuluj</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddMilestonesForm;
