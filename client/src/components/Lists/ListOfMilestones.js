import {
  Button,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box, width } from "@mui/system";
import React, { useEffect, useState } from "react";
import { AddMilestoneForm } from "../Projects/AddMilestoneForm";
import KanbanBoard from "../KanbanBoard/KanbanBoard";
/*KanbanBoard
  Reusable component for displaying list of employees
  in:  employees - array of employees
  out: updated list of employees or list of employees ids 
  */
const ListOfMilestones = (props) => {
  const [milestones, setEmployees] = useState([]);
  const [checkedMilestones, setCheckedMilestones] = useState([]);
  const [view, setView] = useState();
  const [openAddMilestone, setOpenAddMilestone] = useState(false);
  const [openKanban, setOpenKanban] = useState(false);
  const [milestoneId, setMilestoneId] = useState(0);
  const [user] = useState(props.user);

  useEffect(() => {
    if (typeof props.milestones !== "undefined") {
      setEmployees(props.milestones);
    } else {
      setEmployees([
        {
          milestoneId: " ",
          name: " ",
        },
      ]);
    }

    if (typeof props.view !== "undefined") {
      setView(props.view);
    } else {
      setView(0);
    }

    if (props.onChange !== undefined) props.onChange(checkedMilestones);
  }, [checkedMilestones]);

  const openAddMilestoneForm = () => {
    setOpenAddMilestone(true);
  };

  const closeAddMilestoneForm = (name) => {
    props.update(name);

    setOpenAddMilestone(false);
  };

  const checkboxChange = (id) => {
    if (checkedMilestones.includes(id) === true) {
      setCheckedMilestones(checkedMilestones.filter((item) => item !== id));
    } else {
      setCheckedMilestones([...checkedMilestones, id]);
    }
  };

  const setTeamName = (teamName) => {
    return teamName !== null ? teamName : "brak zespołu";
  };

  const showKanban = (id) => {
    setMilestoneId(id);
    setOpenKanban(true);
  };

  return (
    <div>
      {openKanban === true ? (
        <KanbanBoard milestoneId={milestoneId} user={user} />
      ) : (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <b>Nazwa</b>
                </TableCell>
                <TableCell align="left">
                  {user.jobId === 1 && view === 1 ? "" : <b>Zespół</b>}
                </TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {milestones.map((row) => (
                <TableRow
                  key={row.milestoneId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell scope="row">{row.name}</TableCell>
                  <TableCell align="left">
                    {user.jobId === 1 && view === 1 ? (
                      <Checkbox
                        onChange={checkboxChange.bind(this, row.milestoneId)}
                      />
                    ) : (
                      setTeamName(row.teamName)
                    )}
                  </TableCell>
                  <TableCell align="left">
                    <Button onClick={showKanban.bind(this, row.milestoneId)}>
                      Wyświetl kamień milowy
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <Box sx={{ m: 1 }}>
              {user.jobId === 1 && view !== 1 ? (
                <Button onClick={openAddMilestoneForm}>
                  Dodaj kamień milowy
                </Button>
              ) : (
                <div></div>
              )}
            </Box>
          </Table>
        </TableContainer>
      )}
      <AddMilestoneForm close={closeAddMilestoneForm} open={openAddMilestone} />
    </div>
  );
};

export default ListOfMilestones;
