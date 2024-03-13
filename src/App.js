import React, { useState }from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Forecast from './pages/Forecast';
import Error from './components/Error';
import LocationModal from './components/LocationModal';


import './App.css';

const  App = () => {
  const [isLocationModalOpen, setLocationModalOpen] = useState(true);
  const [locationData, setLocationData] = useState(null);

  const handleLocationChange = (newLocation) => {
    setLocationData(newLocation);
  };

  const handleLocationModalClose = () => {
    setLocationModalOpen(false);
  };


  return (
    <div className="App">
      
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast/:city" element={<Forecast/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
      <LocationModal
        isOpen={isLocationModalOpen}
        onRequestClose={handleLocationModalClose}
        onLocationChange={handleLocationChange}
        />
    </Router>
    
    </div>
  );
}

export default App;
