import { Box, Paper } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Teams from "../Teams/Teams";
import Team from "../Teams/Team";
import Employees from "../Employees/Employees";
import Projects from "../Projects/Projects";
import Sidebar from "../Sidebar/Sidebar";

const containerStyle = {
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  padding: "2.5vh 10px 2.5vh 0px",
};

const contentBoxStyle = {
  borderRadius: "10px",
  width: "100%",
  marginTop: "2vh",
};

const Dashboard = (props) => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [overflowActive, setOverflowActive] = useState(false);

  const scroll = {
    backgroundColor: "white",
    height: 50,
    width: "100%",
    //overflow: scroll" : "auto",
    minWidth: 300,
  };
  const handleOpenSidebar = () => {
    setOpenSidebar((currOpen) => !currOpen);
  };

  const pages = {
    projects: (
      <div>
        <Projects user={props.user} />
      </div>
    ),
    teams: (
      <div>
        <Teams user={props.user} />
      </div>
    ),
    employees: (
      <div>
        <Employees user={props.user} />
      </div>
    ),
    password: (
      <div>
        <Employees user={props.user} />
      </div>
    ),
    team: (
      <div>
        <Projects user={props.user} />
        <Team user={props.user} />
      </div>
    ),
  };

  function isOverflowActive(event) {
    return event.offsetWidth < event.scrollWidth;
  }

  const loadPage = (pageType) => {
    return pages[pageType] || <div>Brak strony</div>;
  };

  const compRef = useRef(null);
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  const getComponentWidth = () => {
    if (
      compRef.current.clientWidth !== null &&
      containerRef.current.innerWidth !== null
    ) {
      const newClientWidth = compRef.current.clientWidth;
      const { scrollbars: out, innerWidth: inner } = window;

      console.log("out:" + out.visible);
      console.log("in:" + inner);
    } else {
      console.log("Not working");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", getComponentWidth);
  }, []);

  useEffect(() => {
    return () => {};
  }, [width]);

  return (
    <Box ref={containerRef} display="flex">
      <Sidebar user={props.user} open={openSidebar} />
      <Box sx={containerStyle}>
        <Navbar parentCallback={handleOpenSidebar} />
        <div ref={compRef} style={contentBoxStyle}>
          {loadPage(props.page)}
        </div>
      </Box>
    </Box>
  );
};

export default Dashboard;
