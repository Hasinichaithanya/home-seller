import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "./citytabs.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons'; 

function CityTabs({ cities, setActiveCity,setNumPropToShow }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick1 = (index) => {
    setActiveTab(index);
    setActiveCity(cities[index]);
    setNumPropToShow(6);

  };
  return (
    <div className="city-tabs">
      <div>
      {cities.map((city, index) => (
        <button
          key={index}
          onClick={() => handleTabClick1(index)}
          className={`tab ${index === activeTab ? 'tab-active' : ''}`}
        >
          {city}
        </button>
      ))}
      </div>
      <div>
      <Button variant="outline-primary">
        View All <FontAwesomeIcon icon={faArrowRightLong} />
      </Button>
      </div>
    </div>
  );
}

export default CityTabs;
