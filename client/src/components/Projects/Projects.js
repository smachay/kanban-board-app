import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

function createData(id, name) {
    return { id, name};
  }
  
  const projects = [
        createData(1,"Aplikacja dla wojska"),
        createData(2,"Aplikacja mobilna dla firmy ogrodniczej"),
        createData(3,"Aplikacj To-Do")
  ];

const Projects = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Nazwa projektu</b></TableCell>
                        <TableCell align="left"><b></b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {projects.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left"><Button>Wyświetl kamienie milowe</Button></TableCell>
                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Projects
