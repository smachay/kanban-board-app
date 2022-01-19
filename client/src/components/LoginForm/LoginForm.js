import {
  FormControlLabel,
  Checkbox,
  TextField,
  Avatar,
  Grid,
  Paper,
  Button,
  Typography,
  Link,
} from "@mui/material";
import Logo from "../../images/logo3.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const paperStyle = {
  padding: 20,
  height: "70vh",
  minHeight: 450,
  maxWidth: 400,
  minWidth: 250,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
};
const loginData = [
  {
    employeeId: 1,
    jobId: 1,
    firstName: "Stefan",
    lastName: "Machay",
    email: "manager@gmail.com",
    password: "123",
  },
  {
    employeeId: 2,
    jobId: 2,
    firstName: "Stefan",
    lastName: "Machay",
    email: "teamleader@gmail.com",
    password: "123",
  },
  {
    employeeId: 3,
    jobId: 3,
    firstName: "Stefan",
    lastName: "Machay",
    email: "programista@gmail.com",
    password: "123",
  },
  {
    employeeId: 4,
    jobId: 4,
    firstName: "Stefan",
    lastName: "Machay",
    email: "tester@gmail.com",
    password: "123",
  },
];

const btnStyle = {
  margin: "30px 0px 10px",
};

function LoginForm(props) {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const navigate = useNavigate();

  const checkData = () => {
    loginData.map((obj) => {
      if (obj.email === email) {
        if (obj.password === password) {
          console.log("zalogowany");
          props.logIn(
            obj.employeeId,
            obj.jobId,
            obj.firstName,
            obj.lastName,
            obj.email
          );
          obj.jobId === 1
            ? navigate("/dashboard/projekty")
            : navigate("/dashboard/zespol");
        }
      }
    });
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar
            src={Logo}
            variant="square"
            sx={{ width: 140, height: 140 }}
          />
        </Grid>
        <TextField
          margin="normal"
          variant="standard"
          label="Email "
          type="email"
          placeholder="Podaj swój email..."
          onChange={(event) => setEmail(event.target.value)}
          fullWidth
          required
        />
        <TextField
          variant="standard"
          margin="normal"
          label="Hasło"
          type="password"
          placeholder="Podaj swoje hasło..."
          onChange={(event) => setPassword(event.target.value)}
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Zapamiętaj mnie"
          align="left"
        />
        <Button
          onClick={checkData}
          style={btnStyle}
          type="submit"
          variant="contained"
          fullWidth
        >
          Zaloguj się
        </Button>
        <Typography align="center">
          <Link href="#" underline="none">
            Nie pamiętasz hasła?
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default LoginForm;
