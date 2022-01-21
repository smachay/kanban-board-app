import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  Typography,
  Input,
  TextareaAutosize,
} from "@mui/material";
import React, { useState } from "react";
import ListOfMilestones from "../Lists/ListOfMilestones";

const NoteForm = (props) => {
  const [note, setNote] = useState(" ");

  const handleClose = () => {
    props.close();
  };

  const handleParentCallback = () => {
    props.parentCallback(note);
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
          <b>Dodaj informację o błędzie</b>
        </Typography>
        <TextareaAutosize onChange={(event) => setNote(event.target.value)} />
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button onClick={handleParentCallback}>Dodaj</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NoteForm;
