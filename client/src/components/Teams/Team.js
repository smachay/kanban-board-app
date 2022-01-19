import React from "react";
import ListOfEmployees from "../ListOfEmployees/ListOfEmployees";

function createData(id, firstName, lastName, email, jobTitle) {
  return { id, firstName, lastName, email, jobTitle };
}

const team = [
  createData(1, "Marcin", "Świderski", "m.swiderski@gmail.com", "Programista"),
  createData(2, "Karol", "Bagins", "k.bagins@gmail.com", "Programista"),
  createData(3, "Stefan", "Machay", "s.machay@gmail.com", "Tester"),
];

const Team = (props) => {
  /*
    get team members from db
    */

  return <ListOfEmployees user={props.user} employees={team} />;
};

export default Team;
