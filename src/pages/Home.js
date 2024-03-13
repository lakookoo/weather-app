import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { Container } from '@mui/system';
import axios from 'axios';

const Home = ({ locationData }) => {
  const [weatherData, setWeatherData] = useState(null); // Set initial state to null
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  console.log('apiKey', apiKey)

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setIsLoading(true);
        const { lat, long } = locationData;
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      } finally {
        setIsLoading(false); // Ensure loading state is always set to false
      }
    };

    if (locationData) {
      fetchWeatherData();
    }
  }, [locationData, apiKey]); // Add apiKey to the dependency array
  console.log('locationData', locationData);
  console.log('weatherData', weatherData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <Container sx={{ mt: '1rem' }}>
            <WeatherCard weatherData={weatherData} /> {/* Pass weatherData instead of locationData */}
            <Footer />
          </Container>
        </div>
      )}
    </>
  );
};

export default Home;

