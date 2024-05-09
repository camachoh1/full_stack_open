import { useState, useEffect } from 'react';
import WeatherInfo from './WeatherInfo';



function CountryInfo({country}) {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        <h3>Capital: {country.capital[0]}</h3>
        <h3>Area: {country.area}</h3>
      </div>
      <h3>Laguages:</h3>

      {Object.values(country.languages).map(language => {
        return <li key={language}>{language}</li>
      })}
      <h1 className="flag">{country.flag}</h1>
      <div>
        <WeatherInfo country={country}/>
      </div>
  </div>
  )
}

export default CountryInfo;