import { Grid, Paper, Typography, ButtonBase, Box } from '@mui/material'
import React from 'react'

const WeatherCard = ({weatherData}) => {
  const { main, name, wind} = weatherData || {}
  console.log("weather", weatherData )
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto', // Set margin to auto to center horizontally
        maxWidth: 5000,
        flexGrow: 1,
        backgroundColor: 'white',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ButtonBase sx={{ width: '50%', height: 128 }}>
            <Box sx={{m: "auto", display: "block", maxWidth: "100%", maxHeight:"100%", border:"5px solid red" }}/>
          </ButtonBase>
        </Grid>
        <Grid item xs={8}>
          <Typography component="ul" sx={{ listStyleType: 'disc', pl: 2 }}>
            <li>City: {name}</li>
            <li>Temperature: {main.temp}</li> 
            <li>Feels like: {main.feels_like}</li>
            <li>Wind: {wind.speed} km/h</li>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default WeatherCard