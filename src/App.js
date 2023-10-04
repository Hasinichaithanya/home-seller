import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropertyCard from './Components/PropertyCard'; 
import PropertyDetails from './Components/PropertyDetails';
import "./App.css";

function App() {
  const cities = ['New York', 'Mumbai', 'Paris','London'];
  const [activeCity, setActiveCity] = useState(cities[0]);
  const [numPropToShow, setNumPropToShow] = useState(6);

  return (
    <BrowserRouter>
      <div className='app'>
        <h1 className='heading'>Featured List Property</h1>
        <p className='paragraph'>Real estate can be bought, sold, leased, or rented, and can be a valuable investment oppurtunity. The value of real estate can be...</p>
        
        <Routes>
          <Route path="/"
            element={<PropertyCard activeCity={activeCity} setNumPropToShow={setNumPropToShow} numPropToShow={numPropToShow} cities={cities} setActiveCity={setActiveCity} />}
          />
          <Route
            path="/property/:road_name"
            element={<PropertyDetails/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
