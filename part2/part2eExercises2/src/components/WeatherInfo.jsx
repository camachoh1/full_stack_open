import { useState, useEffect } from 'react';
import countryService from '../services/countries'
const api_key = import.meta.env.VITE_SOME_KEY;

function WeatherInfo({country}) {
  const [weather, setWeather] = useState({});
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${api_key}&units=metric`;
  

  useEffect(() => {
    if (country) {
      countryService
                .makeRequest(URL)
                .then(response => {
                  setWeather(response)
                });
    }

  }, [country]);

  if (!weather) {
    return <p>Loading weather...</p>;
  }

  if (!weather.main || !weather.weather || !weather.weather[0]) {
    return <p>Weather data unavailable</p>;
  }

  
  const { main, weather: weatherDetails, wind } = weather;
  const icon = weatherDetails[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <>
      <h2>Weather in {country.capital[0]}</h2>
      <p>Temperature {weather.main.temp} Celcius</p>
      <img src={iconUrl} alt="Weather Icon" /> 
      <p>Wind: {weather.wind.speed} m/s</p>
    </>
    
  )
}


export default WeatherInfo