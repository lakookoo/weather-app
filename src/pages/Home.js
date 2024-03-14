import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { Container } from '@mui/system';
import axios from 'axios';

const Home = ({ locationData }) => {
  const [weatherData, setWeatherData] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); // Set initial isLoading state to true
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (locationData) {
          const { latitude, longitude } = locationData;
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
          setWeatherData(response.data);
        }
      } catch (error) {
        console.error("Error fetching weather data", error);
      } finally {
        setIsLoading(false); // Set isLoading to false when weather data fetching is done
      }
    };

    fetchWeatherData(); // Fetch weather data on component mount

  }, [locationData, apiKey]); 

  return (
    <>
      <Header />
      <Container sx={{ mt: '1rem' }}>
       { weatherData ? <WeatherCard weatherData={weatherData}/> : <Loading/>}
      <Footer />
      </Container>
    </>
  );
};

export default Home;
