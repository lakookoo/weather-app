import React from 'react';
import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';
import Footer from '../components/Footer';
import { Container } from '@mui/system';

const Home = () => {

  
  return (
   <>
    <Header/>
    <Container 
      sx= {{
        mt: '1rem'
      }}
    >
    <WeatherCard/>
    <Footer/>
    </Container>
   </>
      
    
  );
}

export default Home;
