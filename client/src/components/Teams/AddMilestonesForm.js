import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const AddMilestonesForm = (props) => {
  const handleClose = () => {
    props.close();
  };

  const handleParentCallback = () => {
    props.parentCallback();
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
          <b>Wybierz kamienie milowe do dodania</b>
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button>Dodaj</Button>
        <Button onClick={handleClose}>Anuluj</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddMilestonesForm;
