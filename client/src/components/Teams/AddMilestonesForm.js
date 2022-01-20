import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
<<<<<<< HEAD

const AddMilestonesForm = (props) => {
=======
import ListOfMilestones from "../Lists/ListOfMilestones";

const AddMilestonesForm = (props) => {
  const [listOfIds, setListOfIds] = useState([]);

>>>>>>> main
  const handleClose = () => {
    props.close();
  };

  const handleParentCallback = () => {
<<<<<<< HEAD
    props.parentCallback();
    handleClose();
  };
=======
    props.parentCallback(listOfIds);
    handleClose();
  };

  //receives id list from list component and sends it to parent component
  const handleChildCallback = (ids) => {
    setListOfIds(ids);
  };

>>>>>>> main
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
<<<<<<< HEAD
=======
        <ListOfMilestones
          user={props.user}
          view={1}
          milestones={props.milestones}
          onChange={handleChildCallback}
        />
>>>>>>> main
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
<<<<<<< HEAD
        <Button>Dodaj</Button>
=======
        <Button onClick={handleParentCallback}>Dodaj</Button>
>>>>>>> main
        <Button onClick={handleClose}>Anuluj</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddMilestonesForm;
