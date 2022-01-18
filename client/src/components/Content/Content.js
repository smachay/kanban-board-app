import { CssBaseline, Paper } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "../Navbar/Navbar";
import { useState, useEffect, useRef } from "react";
import Teams from "../Teams/Teams";
import Team from "../Teams/Team";
import Employees from "../Employees/Employees";
import ChangePassword from "../ChangePassword/ChangePassword";
import Projects from "../Projects/Projects";
import KanbanBoard from "../KanbanBoard/KanbanBoard";

const containerStyle = {
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  padding: "2.5vh 10px 2.5vh 0px",
};

const contentBoxStyle = {
  borderRadius: "10px",
  width: "100%",
  marginTop: 10,
};

const Content = (props) => {
  const loadPage = (page) => {
    switch (page) {
      case "projects":
        return (
          <div>
            <Projects user={props.user} />
          </div>
        );

      case "teams":
        return (
          <div>
            <Teams user={props.user} />
          </div>
        );

      case "employees":
        return (
          <div>
            <Employees user={props.user} />
          </div>
        );

      case "password":
        return (
          <div>
            <ChangePassword user={props.user} />
          </div>
        );

      case "team":
        return (
          <div>
            <Projects user={props.user} />
            <Team user={props.user} />
          </div>
        );
      case "kanban":
        return (
          <div>
            <KanbanBoard user={props.user} />
          </div>
        );
      default:
        return <p>Brak strony!</p>;
    }
  };
  return (
    <Box sx={containerStyle}>
      <div>
        <Navbar />
      </div>
      <div style={{ display: "flex", height: "100%" }}>
        {/*<Paper style={contentBoxStyle} elevation={0}>*/}
        <div style={contentBoxStyle}>{loadPage(props.page)}</div>

        {/*</Paper>*/}
      </div>
    </Box>
  );
};

export default Content;
