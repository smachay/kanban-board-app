import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import Task from './Task'
const tasks = [
    {
        name: 'test',
        status: 0,
        developer: 'Stefan',
        tester: 'Karol',
        note: ' '
    },
    {
        name: 'test',
        status: 1,
        developer: 'Stefan',
        tester: 'Karol',
        note: ' '
    },
    {
        name: 'test',
        status: 2,
        developer: 'Stefan',
        tester: 'Karol',
        note: '',

    },
    {
        name: 'test',
        status: 3,
        developer: 'Stefan',
        tester: 'Karol',
        note: 'tabele przechowują dane w sposób atomowy, czyli każde pole przechowuje'
    },
    {
        name: 'test',
        status: 4,
        developer: 'Stefan',
        tester: 'Karol',
        note: 'tabele przechowują dane w sposób atomowy, czyli każde pole przechowuje'
    }
]
const KanbanBoard = (props) => {

    return (
        <Grid
            container
            direction="column"
        >
            <Paper sx={{ mt: 1, mb:2, p: 1}}>
                <Typography>
                    <b>Projekt:</b>Aplikacja do obsługi klientów
                </Typography>
                <Typography>
                   <b>Kamień milowy:</b>Webowa aplikacja kliencka
                </Typography>
            </Paper>
            <Grid
                container
                direction="row"
                justifyContent="center"

            >
                
                <Grid xs={2}>
                    <b>Nieprzypisane</b>
                    {
                        tasks.filter(obj => obj.status === 0).map((obj) => {
                            return(
                                <Task 
                                    status={obj.status}
                                    name={obj.name}
                                />
                            );
                        })
                    }

                </Grid>
                <Grid xs={2}>
                    <b>W trakcie</b>
                    {
                        tasks.filter(obj => obj.status === 1).map((obj) => {
                            return(
                                <Task 
                                    user={props.user}
                                    status={obj.status}
                                    name={obj.name}
                                    developer={obj.developer}
                                />
                            );
                        })
                    }
                </Grid>
                <Grid xs={2}>
                    <b>Do testu</b>
                    {
                        tasks.filter(obj => obj.status === 2).map((obj) => {
                            return(
                                <Task 
                                    user={props.user}
                                    status={obj.status}
                                    name={obj.name}
                                    developer={obj.developer}
                                    tester={obj.tester}
                                />
                            );
                        })
                    }
                </Grid >
                <Grid xs={2}>
                    <b>Do poprawy</b>
                    {
                        tasks.filter(obj => obj.status === 3).map((obj) => {
                            return(
                                <Task 
                                    user={props.user}
                                    status={obj.status}
                                    name={obj.name}
                                    developer={obj.developer}
                                    tester={obj.tester}
                                />
                            );
                        })
                    }

                </Grid>
                <Grid xs={2}>
                    <b>Wykonane</b>
                    {
                        tasks.filter(obj => obj.status === 4).map((obj) => {
                            return(
                                <Task 
                                    user={props.user}
                                    status={obj.status}
                                    name={obj.name}
                                    developer={obj.developer}
                                    tester={obj.tester}
                                />
                            );
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default KanbanBoard
