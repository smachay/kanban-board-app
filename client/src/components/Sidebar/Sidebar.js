import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Logo from "../../images/logo3.png";
import React, { useEffect, useState } from "react";
import {
  AccountTreeOutlined,
  ArchiveOutlined,
  GroupOutlined,
  MailOutlined,
  PasswordOutlined,
  PermIdentityOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const containerStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
};

const logoStyle = {
  padding: 20,
  width: 150,
  height: 150,
  alignSelf: "center",
};

const dividerStyle = {
  backgroundColor: "#48aee4",
  borderBottomWidth: 2,
  margin: "10px 0 10px",
  width: "90%",
  alignSelf: "center",
};

const Sidebar = (props) => {
  const [listType, setListType] = useState(0);
  const [jobTitle, setJobTitle] = useState("");
  const navigate = useNavigate();

  const drawerStyle = {
    flexShrink: 0,
    width: props.open === true ? 300 : 0,

    height: "100vh",
    marginRight: "10px",
    transition: "1s",
    "& .MuiDrawer-paper": {
      width: 300,
      left: props.open === true ? "0%" : "-100%",
      height: "100vh",
      transition: "1.5s",
    },
  };

  //type is used to filter list items
  const itemsList = [
    {
      type: 1,
      text: "Projekty",
      icon: <AccountTreeOutlined />,
      path: "/dashboard/projekty",
    },
    {
      type: 1,
      text: "Zespoły",
      icon: <GroupOutlined />,
      path: "/dashboard/zespoly",
    },
    {
      type: 1,
      text: "Pracownicy",
      icon: <PermIdentityOutlined />,
      path: "/dashboard/pracownicy",
    },
    {
      type: 2,
      text: "Zespół",
      icon: <MailOutlined />,
      path: "/dashboard/zespol",
    },
  ];

  const jobTitles = {
    1: "Menedżer",
    2: "Team leader",
    3: "Programista",
    4: "Tester",
  };
  //setting type of list that will be rendered on the sidebar
  useEffect(() => {
    setJobTitle(jobTitles[props.user.jobId]);
    props.user.jobId === 1 ? setListType(1) : setListType(2);
  });

  return (
    <Box sx={containerStyle}>
      <Drawer sx={drawerStyle} variant="permanent">
        <Avatar src={Logo} variant="square" style={logoStyle} />
        <Divider style={dividerStyle} flexItem={true} />
        <Grid container>
          <Grid xs={4} align="center" item>
            <Avatar>
              {props.user.firstName.charAt(0)}
              {props.user.lastName.charAt(0)}
            </Avatar>
          </Grid>
          <Grid xs={8} align="left" item>
            <Typography component="h2">
              {props.user.firstName} {props.user.lastName}
            </Typography>
            <Typography fontSize={12}>{jobTitle}</Typography>
          </Grid>
        </Grid>
        <Divider style={dividerStyle} flexItem />
        <List disablePadding>
          {itemsList
            .filter((item) => item.type == listType || item.type == 0)
            .map((obj) => {
              const { type, text, icon, path } = obj;
              return (
                <ListItem
                  style={{ padding: "8px 0px 8px 38px" }}
                  button
                  key={text}
                  onClick={() => navigate(obj.path)}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
