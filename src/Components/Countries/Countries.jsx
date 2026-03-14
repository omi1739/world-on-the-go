import React, { use } from 'react'
import Country from '../Country/Country';

const Countries = ({countriesPromice}) => {

    const countryData = use(countriesPromice)
    const countries = countryData.countries;
  
    

  return (
    <div>
      <h1>In The Countries :{countries.length}  </h1>
      {
        countries.map(country => <Country country = {country}></Country>)
      }
    </div>
  )
}

export default Countries
