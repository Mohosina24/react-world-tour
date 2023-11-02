import { useEffect } from "react";
import { useState } from "react";

import Country from "../Country/Country";
import './Countries.css';



const Countries = () => {
    const [countries, setCountries] = useState([]);
    const[visitedCountry , setVisitedCountry] = useState([]);
    const[visitedFlags, setVisitedFlags] = useState([]);
    
    useEffect(() => {
     fetch('https://restcountries.com/v3.1/all')
       .then (res => res.json())
       .then(data =>  setCountries(data))
    },[])

    // handle click add korate hobe
    const handleVisitedCountry = country =>{
      
       const newCountries = [...visitedCountry,country];
       setVisitedCountry(newCountries);
    }
    const handleVisitedFlags = flags =>{
        console.log('added visited flag')
        const newFlags = [...visitedFlags, flags];
        setVisitedFlags(newFlags)
    }
  
    

    return (
        <div  >
            <h3>Contries: {countries.length}</h3>
           
           <div>
            <h1>Visited Country: </h1>
           <ul>
            {
                visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
            }
           </ul>
           </div>
           {/* visited Flag */}
           <div className="flag-container">
            <h1>visited flags</h1>
            {
                visitedFlags.map(flags => <img style={{display:'block'}} src={flags}></img>)
            }
           </div>
           {/* display countries */}
           <div className="country-container">
             
           {
                countries.map(country => <Country key={country.cca3}
                    handleVisitedCountry ={handleVisitedCountry}
                    handleVisitedFlags ={handleVisitedFlags}
                    country={country}></Country>)
            }
           </div>
            </div>
    );
};

export default Countries;