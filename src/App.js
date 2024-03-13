import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Forecast from './pages/Forecast';
import Error from './components/Error';


import './App.css';

function App() {
  


  return (
    <div className="App">
      
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast/:city" element={<Forecast/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
