import React, {useState, useEffect} from "react";
import ListOfEmployees from "../Lists/ListOfEmployees";

function createData(id, firstName, lastName, email, jobTitle) {
  return { id, firstName, lastName, email, jobTitle };
}



const Team = (props) => {


  const [team, setTeam] = useState([
    // createData(1, "Marcin", "Świderski", "m.swiderski@gmail.com", "Programista"),
    // createData(2, "Karol", "Bagins", "k.bagins@gmail.com", "Programista"),
    // createData(3, "Stefan", "Machay", "s.machay@gmail.com", "Tester"),
   ]);

   useEffect(() => {
    fetch('http://localhost:3001/employees/' + props.user.id + "/team", {
      method: 'get',
      headers: {'Content-Type':'application/json'}
   }).then(resp=>resp.json()).then(
     x=>{
       let t = [];
       x.forEach(user => {
         console.log(user);
      t.push(createData(user.id, user.first_name, user.last_name, user.email, user.job_title))
    })
    setTeam(t);
  }
    )
  }, []);
  /*
    get team members from db
    */

<<<<<<< HEAD
  return (
    <ListOfEmployees
      user={props.user}
      employees={team}
    />
  );
=======
  return <ListOfEmployees user={props.user} employees={team} />;
>>>>>>> main
};

export default Team;
