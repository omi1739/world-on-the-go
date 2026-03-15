import React, { useState } from "react";
import './Country.css';

const Country = ({ country , handleVisitedCountries }) => {
  console.log(country.currencies.currencies);

  const[visited, setVisited] = useState(false)

  const handleVisit = ()=>{
    if(visited){
      setVisited(false)
    }
    else{
      setVisited(true)
    }

    handleVisitedCountries(country);

  }

  return (
    <div className={`country ${visited && 'country-visited'}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name : {country.name.common}</h3>
      <h3>Capital : {country.capital.capital}</h3>
      <h4>Region : {country.region.region}</h4>
      <h4>Population : {country.population.population}</h4>
      <button className="btn" onClick={handleVisit}> 
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
