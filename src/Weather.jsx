import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import axios from 'axios';
import './index.css';
import PacmanLoader from 'react-spinners/PacmanLoader';

function Weather(props) {

    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
    }
let apiKey = "ad793a6d772939c31783de5822791acf";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

    return (
  
       <PacmanLoader 
       size={25}
       margin={10}
       color={"#36D7B7"}
       loading={true}   
       />
    
    );
}
export default Weather;