import React from 'react';
import { useParams } from 'react-router-dom';

const Forecast = () => {
    const { city } = useParams();
  return (
    <div>
      {`Forecast ${city}`}
    </div>
  );
}

export default Forecast;
