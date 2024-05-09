import { useState, useEffect } from "react";
import CountryInfo from "./CountryInfo"

function DisplayCountry({countries}) {
  const [selectedCountry, setSelectedCountry] = useState(null);


  const handleShowButton = (country) => {
    setSelectedCountry(country);
  }

  useEffect(() => {
    if (countries.length === 0) {
      setSelectedCountry(null);
    }
  }, [countries])

  if (countries.length >= 10) {
    return (
      <p>Too many matches, specify another filter.</p>
    )
  } else if (countries.length === 1) {
    const country = countries[0];
    return (
      <CountryInfo country={country} />
    )
  } else {
    return (
      <div>
        {countries.map(country => {
        return <li key={country.name.common} className="list">  {country.name.common}<button onClick={() => {handleShowButton(country)}}>Show</button>
        </li>
      })}
      {selectedCountry && countries.length > 0 && <CountryInfo country={selectedCountry} />}
      </div>
    )
  }
}

export default DisplayCountry