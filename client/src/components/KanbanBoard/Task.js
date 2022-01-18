import React, { useEffect, useState } from 'react'
import { Collapse, List, ListItemButton, ListItemText, Paper, Typography } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Task = (props) => {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(props.status)
    
    const handleClick = () => {
        setOpen(!open);
    };

    const loadInfo = () => {
        return <div>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="Info" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" >
                    <Typography>Programista:{props.developer}</Typography>
                    {status !== 1 ? <Typography>
                        Tester:{props.tester}
                    </Typography> : <div></div>}
                </List>
            </Collapse>
        </div>
    }

    const loadTask = () => {
        if(props.user >= 3 && status != 4){
            return  <div>
                        <ListItemButton>
                             <ListItemText primary="Zatwierdź" />
                        </ListItemButton>
                        {status == 2 && props.user == 4 ? <ListItemButton>
                            <ListItemText primary="Odrzuć" />
                        </ListItemButton> : <div></div>}
                    </div>
        }
    
}
    return (
        <Paper display='flex' sx={{ m: 1, p: 1 }}>
            <Typography align='center'>{props.name}</Typography>
            <List
                sx={{ width: '100%' }}
                component="nav"
            >
                {status !== 0 ? loadTask() : ' '}
                
                {//temporary solution
                    status !== 0 ? loadInfo() : ' '
                }
            </List>

        </Paper>
    )
}

export default Task





/*
if (status == 0) {

        } else if (status == 1 || status == 3 ) {
            return <div>
                        <ListItemButton>
                            <ListItemText primary="Zatwierdź" />
                        </ListItemButton>
                        <ListItemButton onClick={handleClick}>
                            <ListItemText primary="Info" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" >
                                <Typography>Programista:{props.developer}</Typography>
                                {status == 4 ? 
                                    <Typography>
                                        Tester:{props.tester}
                                    </Typography> 
                                    : 
                                    <div></div>}
                            </List>
                        </Collapse>
                    </div>
        } else if (status == 2 ) {
            return  <div>
                        {props.user == 4 ? <ListItemButton>
                            <ListItemText primary="Zatwierdź" />
                        </ListItemButton>
                        :
                        <div></div>}
                        
                        {props.user == 4 ? <ListItemButton>
                            <ListItemText primary="Odrzuć" />
                        </ListItemButton>
                        :
                        <div></div>}

                        <ListItemButton onClick={handleClick}>
                            <ListItemText primary="Info" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        
                    </div>
        } else if (status == 4) {

        }
                <ListItemButton>
                    <ListItemText primary="Zatwierdź" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Odrzuć" />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Info" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" >
                        <Typography>Programista:{props.developer}</Typography>
                        {<Typography>Tester:{props.tester}</Typography>}
                        </List>
                        </Collapse>



import { List, ListItemButton, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'

const Task = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Paper display='flex' sx={{ m: 1, p:1}}>
            <Typography align='center'>Treść zadania</Typography>
            <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component="nav"
            >
                
                <ListItemButton>
                    <ListItemText primary="Zatwierdź" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Odrzuć" />
                </ListItemButton>
            </List>

        </Paper>
    )
}

export default Task*/
