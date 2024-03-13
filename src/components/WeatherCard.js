import { Grid, Paper, Typography, ButtonBase, Box } from '@mui/material'
import React from 'react'

const WeatherCard = ({weatherData}) => {
  const { main, name, weather } = weatherData || {}
  console.log("weather", main, name, weather )
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
        <Grid item>
          <ButtonBase sx={{ width: '50%', height: 128 }}>
            <Box sx={{m: "auto", display: "block", maxWidth: "100%", maxHeight:"100%"}}/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Temperature
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Feels like 
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Description
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
            The weather is like 
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default WeatherCard