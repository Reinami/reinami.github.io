import React from 'react'

import './index.css'

import { AppBar, Toolbar, MenuItem, Typography, Divider, Box } from '@mui/material'

import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav id="navbar">
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h5" marginRight={2.5}>Reinami</Typography>
                    <Divider orientation="vertical" variant="middle" flexItem/>
                    <Box display="flex" marginLeft={2.5} gap={2}>
                        <MenuItem component={NavLink} to={"/"}>{"Home"}</MenuItem>
                        <MenuItem component={NavLink} to={"/dbd"}>{"Dead by Daylight"}</MenuItem>
                    </Box>
                </Toolbar>
            </AppBar>
        </nav>
    )
}
