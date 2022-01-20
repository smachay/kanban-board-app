import LoginForm from "./components/LoginForm/LoginForm";
import Image from "./images/bg2.jpg";
import Dashboard from "./components/Dashboard/Dashboard";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const appStyle = {
  minHeight: "100vh",
  minWidth: "100vh",
  backgroundImage: `url(${Image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
};

function App() {
  // userType == 0 - user is not logged in
  // userType == 1 - manager
  // userType == 2 - team leader
  // userType == 3 - developer
  // userType == 4 - tester

  const [user, setUser] = useState({
    id: 0,
    jobId: 0,
    firstName: " ",
    lastName: " ",
    email: " ",
    teamId: 0
  });

  const logIn = (employeeId, jobId, firstName, lastName, email, teamId) => {
    setUser({
      id: employeeId,
      jobId: jobId,
      firstName: firstName,
      lastName: lastName,
      email: email,
      teamId: teamId
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div style={appStyle}>
              <LoginForm logIn={logIn} />
            </div>
          }
        />
        <Route
          path="/dashboard/projekty"
          element={
            <div style={appStyle}>
              <Dashboard user={user} page={"projects"} />
            </div>
          }
        />
        <Route
          path="/dashboard/zespoly"
          element={
            <div style={appStyle}>
              <Dashboard user={user} page={"teams"} />
            </div>
          }
        />
        <Route
          path="/dashboard/pracownicy"
          element={
            <div style={appStyle}>
              <Dashboard user={user} page={"employees"} />
            </div>
          }
        />
        <Route
          path="/dashboard/zmien-haslo"
          element={
            <div style={appStyle}>
              <Dashboard user={user} page={"password"} />
            </div>
          }
        />
        <Route
          path="/Dashboard/zespol"
          element={
            <div style={appStyle}>
              <Dashboard user={user} page={"team"} />
            </div>
          }
        />
        <Route
          path="/Dashboard/kanban"
          element={
            <div style={appStyle}>
              <Dashboard user={user} page={"kanban"} />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
<div style={appStyle}>
      {
        userType == 0 ? <LoginForm logIn={logIn}/> : <Dashboard logOut={logOut} user={userType} />
      }

    </div>
*/
