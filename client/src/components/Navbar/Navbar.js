import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useNavigate, useLocation } from "react-router-dom";
import MenuButton from "./MenuButton";
const appBarStyle = {
  borderRadius: "10px",
};

const Navbar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [locationName, setLocationName] = useState(" ");

  useEffect(() => {
    let loc = location;
    loc = location.pathname.replace("/dashboard/", "");
    setLocationName(loc.toUpperCase());
  });

  const handleOpenSidebar = () => {
    props.parentCallback();
  };

  const logOut = () => {
    navigate("/");
  };

  return (
    <AppBar style={appBarStyle} position="static">
      <Toolbar>
        <MenuButton parentCallback={handleOpenSidebar} />
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
