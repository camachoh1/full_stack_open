import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Filter from './components/Filter'
import DisplayCountry from './components/DisplayCountry';
import './index.css'


function App() {
  const [value, setValue] = useState('');
  const [info, setInfo] = useState({})

  const URL = `https://studies.cs.helsinki.fi/restcountries/api/all`

  useEffect(() => {
      countryService
                  .makeRequest(URL)
                  .then(response => {
                    setInfo(response)
                  });
  }, [])

  if (!info) {
    return null;
  }

  function handleFilterChange(event) {
    const userInput = event.target.value;
    setValue(userInput);
  }

  const filteredCountries = value 
  ? info.filter((c) => c.name.common.toLowerCase().includes(value.toLowerCase()))
  : []

  return (
    <div>
      <Filter value={value} handleFilter={handleFilterChange}/>
      <DisplayCountry countries={filteredCountries} />
    </div>
    
  )
}

export default App
