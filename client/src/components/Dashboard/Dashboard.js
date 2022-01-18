import { Grid, Box } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import Content from '../Content/Content'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

const Dashboard = (props) => {

    return (
        <Box display='flex'>
            <Sidebar user={props.user} />
            <Content user={props.user} page={props.page} />
        </Box>
    )
}

export default Dashboard

