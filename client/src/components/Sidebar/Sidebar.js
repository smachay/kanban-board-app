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
  Paper,
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

const drawerStyle = {
  flexShrink: 0,
  width: 300,
  height: "95vh",
  margin: "2.5vh 10px 0px 10px",

  "& .MuiDrawer-paper": {
    //backgroundColor:"#e1e5f2",
    marginTop: "2.5vh",
    width: 300,
    height: "95vh",
    borderRadius: "10px",
  },
};

const Sidebar = (props) => {
  const [listType, setListType] = useState(0);
  const [jobTitle, setJobTitle] = useState(" ");
  const navigate = useNavigate();

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
      type: 1,
      text: "Archiwum",
      icon: <ArchiveOutlined />,
      path: "/dashboard/archiwum",
    },
    {
      type: 2,
      text: "Zespół",
      icon: <MailOutlined />,
      path: "/dashboard/zespol",
    },
    {
      type: 0,
      text: "Zmień hasło",
      icon: <PasswordOutlined />,
      path: "/dashboard/zmien-haslo",
    },
  ];
  //setting type of list that will be rendered on a sidebar
  useEffect(() => {
    switch (props.user.jobId) {
      case 1:
        setJobTitle("Menedżer");
        setListType(1);
        break;
      case 2:
        setJobTitle("Team leader");
        setListType(2);
        break;
      case 3:
        setJobTitle("Programista");
        setListType(2);
        break;
      case 4:
        setJobTitle("Tester");
        setListType(2);
        break;
      default:
        break;
    }
  });

  return (
    <Box sx={containerStyle}>
      <Drawer sx={drawerStyle} variant="permanent" anchor="none">
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
        <List disablePadding fullWidth>
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
        {console.log(listType)}
      </Drawer>
    </Box>
  );
};

export default Sidebar;

/*<Box sx={containerStyle}>

        
    </Box>

<Grid>
            <Paper elevation={5} style={paperStyle}>
                <Grid style={gridStyle} align="center">
                    <Avatar 
                        src={Logo}
                        variant="square"
                        style={logoStyle}
                    />
                    <Divider style={dividerStyle}/>
                    <Grid container>
                        <Grid xs={4} item>
                            <Avatar>
                                SM
                            </Avatar>
                        </Grid>
                        <Grid xs={8} align='left' item>
                            <Typography  component="h2">
                                Stefan Machay
                            </Typography>
                            <Typography  fontSize={12}>
                                Programista
                            </Typography>
                        </Grid>   
                    </Grid>
                    <Divider style={dividerStyle}/>
                    
                </Grid>
            </Paper>
        </Grid>
        */
