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
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export const AddEmployeeForm = (props) => {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [password1, setPassword1] = useState(" ");
  const [password2, setPassword2] = useState(" ");
  const [job, setJob] = useState(" ");
  const [showMessage, setShowMessage] = useState(false);

  const handleClose = () => {
    props.close();
  };

  const addEmployee = (user) => {
    props.addEmployee(user);
  };

  const validateData = () => {
    if (password1 === password2) {
      setShowMessage(false);
      setPassword(password1);
      addEmployee({
        employeeId: null,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        jobId: job,
      });
    } else {
      setShowMessage(true);
    }
  };

  const newLocal = showMessage === true;
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
          <b>Podaj dane nowego pracownika</b>
        </Typography>
        <TextField
          sx={{ mt: 1, mb: 1 }}
          label="Imie"
          onChange={(event) => setFirstName(event.target.value)}
          fullWidth
        />
        <TextField
          sx={{ mb: 1 }}
          label="Nazwisko"
          onChange={(event) => setLastName(event.target.value)}
          fullWidth
        />
        <TextField
          sx={{ mb: 1 }}
          label="Email"
          onChange={(event) => setEmail(event.target.value)}
          fullWidthst
        />
        <TextField
          sx={{ mb: 1 }}
          type="password"
          label="Hasło"
          onChange={(event) => setPassword1(event.target.value)}
          error={showMessage === true ? true : false}
          fullWidth
        />
        <TextField
          type="password"
          error={showMessage === true ? true : false}
          sx={{ mb: 1 }}
          label="Powtórz hasło"
          onChange={(event) => setPassword2(event.target.value)}
          fullWidth
        />
        <Select
          value={job}
          label="Stanowisko"
          onChange={(event) => setJob(event.target.value)}
        >
          <MenuItem value={1}>Menedżer</MenuItem>
          <MenuItem value={2}>Team leader</MenuItem>
          <MenuItem value={3}>Programista</MenuItem>
          <MenuItem value={4}>Tester</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button onClick={validateData.bind(this)}>
          Dodaj nowego pracownika
        </Button>
        <Button onClick={handleClose}>Anuluj</Button>
      </DialogActions>
    </Dialog>
  );
};
