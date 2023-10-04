import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import CityTabs from './CityTabs'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot,faBuilding,faBed,faBath,faMaximize,faHeart,faHourglassStart} from '@fortawesome/free-solid-svg-icons'; 

import home_data from "../home_data.json"
import "./propertycard.css" 

function PropertyCard({activeCity,numPropToShow,setNumPropToShow, cities,setActiveCity}) {

  let name = JSON.stringify(activeCity)
  let filteredData = home_data.filter((home)=>(JSON.stringify(home.city)===name))
  const to_show_btn = numPropToShow < filteredData.length;
  const handleShowMore = ()=>{
    setNumPropToShow(numPropToShow+3)
  }
  return (
    <div>
       <CityTabs cities={cities} setActiveCity={setActiveCity} setNumPropToShow={setNumPropToShow}/>
    <div className="property-card-container">
      {filteredData.slice(0, numPropToShow).map((home)=>
      { let {image_url,road_name,address,number_of_bathrooms,number_of_beds,number_of_rooms,size_in_feet,cost_per_month} = home;
      return(

        <div className="property-card" key={uuidv4()}>
           
          <div className="like-and-rent" style={{backgroundImage: `url(${image_url})`,height:"240px",width: "100%",
            backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:"10px",}}>
              <p className='rent'>{
                 ((road_name.length)%2)===0? "For Rent": "For Sale"
              }</p> 
              <button className="like-button"><FontAwesomeIcon icon={faHeart}/></button>
          </div>  
        <span className='st-name'><FontAwesomeIcon icon={faLocationDot} className='icon' />{road_name}</span>
        <span className='address'>{address}</span>
        <div className='details'>
            <span className='detail'><FontAwesomeIcon icon={faBuilding} className='icon' />{number_of_rooms} room</span>
            <div className="vertical-line"></div>
            <span className='detail'><FontAwesomeIcon icon={faBed}  className='icon' />{number_of_beds} Bed</span>
            <div className="vertical-line"></div>
            <span className='detail'><FontAwesomeIcon icon={faBath} className='icon'  />{number_of_bathrooms} Bath</span>
            <div className="vertical-line"></div>
            <span className='detail'><FontAwesomeIcon icon={faMaximize} className='icon'  />{size_in_feet} sft</span>
        </div>
        <hr/>
          <div className="cost-and-read-more">
            <span className='cost_'><span className='cost'>${cost_per_month}</span>/month</span>
            <Link to={`/property/${road_name}`}>
                <Button className='read-more' variant="outline-primary"> Read More</Button>
                 </Link>     
           </div>
        </div> 
   
      )}
      )}
    </div>
    <div className="show-more">
  {to_show_btn? <Button variant='primary'  onClick={handleShowMore}> <FontAwesomeIcon icon={faHourglassStart} /> Show More</Button>:<h3>No more results... <br/>You have reached the end.</h3>}
   </div>
  </div>
  );
}

export default PropertyCard;
