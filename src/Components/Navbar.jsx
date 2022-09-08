import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:'white'}}>
        <Toolbar variant="dense" sx={{display:'flex',flexDirection:'row-reverse'}}>
          <IconButton edge="start" color="primary" aria-label="menu" sx={{ ml: 2 }}>
            <img src='/icons/navbar-icon.png'></img>
          </IconButton>
          <Button variant="contained" sx={{textTransform:'none'}}>Manage Subscription</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
