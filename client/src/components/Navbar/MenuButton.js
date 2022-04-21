import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { IconButton } from "@mui/material";

const MenuButton = (props) => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen((currOpen) => !currOpen);
    props.parentCallback();
  };

  const iconButtonStyle = {
    size: "large",
    edge: "start",
    color: "inherit",
    ariaLabel: "menu",
    mr: 2,
  };

  return (
    <IconButton style={iconButtonStyle} onClick={handleOpen}>
      {open === true ? <MenuOpenIcon /> : <MenuIcon />}
    </IconButton>
  );
};

export default MenuButton;
