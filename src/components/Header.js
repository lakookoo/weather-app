
import { CloudOutlined } from '@mui/icons-material';
import { AppBar, TextField, Toolbar, Typography } from '@mui/material';
import React from 'react';



const Header = (props) => {
  const {onChange, value} = props;
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
          Weather App&nbsp;
          <CloudOutlined sx={{ marginLeft: '8px' }} />
        </Typography>
        <TextField
          label="Search"
          variant="standard"
          type="search"
          value={value}
          onChange={onChange}
          sx={{
            backgroundColor: 'white',
            color: 'black',
            margin: '15px',
            width: '200px',
           }}/>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
