import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [locationName, setLocationName] = useState(" ");

  useEffect(() => {
    let loc = location;
    loc = location.pathname.replace("/dashboard/", "");
    setLocationName(loc.toUpperCase());
  });
  const logOut = () => {
    navigate("/");
  };

  return (
    <AppBar sx={{ borderRadius: "10px" }} position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {/*<MenuIcon />*/}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {locationName}
        </Typography>
        <Button color="inherit" onClick={logOut}>
          Wyloguj się
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
