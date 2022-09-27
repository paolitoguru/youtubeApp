import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Menubar = () => {
    
    return (
        <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" noWrap component="div" textAlign="center" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                MUI
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
    </div>
    );
};

export default Menubar;