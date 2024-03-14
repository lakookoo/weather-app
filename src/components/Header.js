
import { CloudOutlined } from '@mui/icons-material';
import { AppBar, TextField, Toolbar, Typography } from '@mui/material';
import React, { useState} from 'react';
import axios from 'axios';



const Header = (props) => {
  const [query, setQuery] = useState('');
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  
  const handleKeyPress = async (event) => {
    if (event.key === 'Enter'){

    try {
      const locQuery = event.target.value;
      console.log('loc query', locQuery);
      const lonAndLat = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${locQuery}&appid=${apiKey}`
      );
      const { lat, lon} = lonAndLat.data[0];
      console.log('longitude and latitude', lat, lon)
    } catch(error) {
      console.error('Error fetching data:', error);
    }
  }}
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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
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
