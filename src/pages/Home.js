import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { Container } from '@mui/system';
import axios from 'axios';

const Home = ({ locationData }) => {
  const [weatherData, setWeatherData] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setIsLoading(true);
        if (locationData){
          console.log("Location data", locationData)
          const { latitude, longitude } = locationData;
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
          setWeatherData(response.data);
        } else {
          setIsLoading(false)
        }
        
      } catch (error) {
        console.error("Error fetching weather data", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (locationData) {
      fetchWeatherData();
    }
  }, [locationData, apiKey]); 
  

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <Container sx={{ mt: '1rem' }}>
            <WeatherCard weatherData={weatherData} /> 
            <Footer />
          </Container>
        </div>
      )}
    </>
  );
};

export default Home;

