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

/*
  Reusable component for displaying list of employees
  in:  employees - array of employees
  out: updated list of employees or list of employees ids 
  */
const ListOfMilestones = (props) => {
  const [milestones, setEmployees] = useState([]);
  const [checkedMilestones, setCheckedMilestones] = useState([]);
  const [view, setView] = useState();

  const [user] = useState(props.user);

  useEffect(() => {});

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

    props.onChange(checkedMilestones);
  }, [checkedMilestones]);

  const checkboxChange = (id) => {
    if (checkedMilestones.includes(id) === true) {
      setCheckedMilestones(checkedMilestones.filter((item) => item !== id));
    } else {
      setCheckedMilestones([...checkedMilestones, id]);
    }
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <b>Nazwa</b>
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
                <Checkbox
                  onChange={checkboxChange.bind(this, row.milestoneId)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <Box sx={{ m: 1 }}>
          {user.jobId === 1 && view !== 1 ? (
            <Button>Dodaj</Button>
          ) : (
            <div></div>
          )}
        </Box>
      </Table>
    </TableContainer>
  );
};

export default ListOfMilestones;
