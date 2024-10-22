import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        top: '0',
        backgroundColor: '#F5DEB3',  // Skin color background
        boxShadow: 'none',
        padding: '10px 0',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Project Name */}
        <Typography variant="h6" sx={{ color: '#000', fontSize: '24px', fontWeight: 500 }}>
          AI Dermatology Assistant
        </Typography>

        {/* Navigation Links (centered) */}
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            gap: '50px',
          }}
        >
          <Button sx={{ fontSize: '20px', color: '#000' }}>Home</Button>
          <Button sx={{ fontSize: '20px', color: '#000' }}>About Us</Button>
          <Button sx={{ fontSize: '20px', color: '#000' }}>Contact Us</Button>
        </Box>

        {/* Login Button styled professionally */}
        <Button
          variant="contained"
          sx={{
            fontSize: '20px',
            fontWeight: 500,
            backgroundColor: '#000',
            color: '#fff',
            padding: '8px 20px',
            borderRadius: '25px',  // Rounded corners
            textTransform: 'none',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',  // Subtle shadow
            '&:hover': {
              backgroundColor: '#333', // Darker shade on hover
              boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',  // Slightly more intense shadow on hover
            },
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;




