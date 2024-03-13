import React from 'react';
import { Paper, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Paper
      component="footer"
      elevation={3} // Adjust the elevation for shadow effect
      sx={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        padding: '20px',
        backgroundColor: '#333', // Adjust background color
        color: 'white', // Adjust text color
        textAlign: 'center',
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Турум-пурум
      </Typography>
    </Paper>
  );
};

export default Footer;
