import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from 'react-router-dom';
import home_data from "../home_data.json"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot,faBuilding,faBed,faBath,faMaximize,faHeart} from '@fortawesome/free-solid-svg-icons'; 

import "./propertycard.css" 

function PropertyDetails() {
  const { road_name } = useParams();
  const property = home_data.find((home) => home.road_name === road_name);
  console.log(typeof road_name, road_name)
  if (!property) {
    return <div className='not-found'>Property not found</div>;
  }
  let {image_url,address,number_of_bathrooms,number_of_beds,number_of_rooms,size_in_feet,cost_per_month} = property;
      return(
        <div className="property-card">
          <div className="like-and-rent" style={{backgroundImage: `url(${image_url})`,height:"240px",width: "100%",
            backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:"10px"}}>
              <p className='rent'>For Rent</p> 
              <button className="like-button"><FontAwesomeIcon icon={faHeart} /></button>
          </div>   
        <span className='st-name'><FontAwesomeIcon icon={faLocationDot} className='icon' />{road_name}</span>
        <span className='address'>{address}</span>
        <div className='details'>
            <span className='detail'><FontAwesomeIcon icon={faBuilding} className='icon' />{number_of_rooms} room</span>
            <div class="vertical-line"></div>
            <span className='detail'><FontAwesomeIcon icon={faBed}  className='icon' />{number_of_beds} Bed</span>
            <div class="vertical-line"></div>
            <span className='detail'><FontAwesomeIcon icon={faBath} className='icon'  />{number_of_bathrooms} Bath</span>
            <div class="vertical-line"></div>
            <span className='detail'><FontAwesomeIcon icon={faMaximize} className='icon'  />{size_in_feet} sft</span>
        </div>
        <hr/>
          <div className="cost-and-read-more">
            <span className='cost_'><span className='cost'>${cost_per_month}</span>/month</span>
          </div>
        </div> 
      )
    
      }
  


export default PropertyDetails;
