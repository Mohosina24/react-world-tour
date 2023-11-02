import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
   const {name,flags,population,area,cca3} = country;
// aita hold are jonnno kaj kore
   const [visited,setVisited] = useState(false)
//    aikhne handle kora hoi
   const handleVisited= () =>{
         setVisited(!visited)
   }
  const passParams =() => handleVisitedCountry(country);
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'purple':'white'}}>Name:{name.common} </h3>
           <img src={flags.png} alt="" />
           <p>Population: {population}</p>
           <p>Area:{area}</p>
           <p>Code: {cca3}</p>
           <button onClick={() => handleVisitedCountry(country)}>Mark as</button>
           <br />
           <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add flag</button>
           {/* trigged korbe aikhne */}
           <button style={{ backgroundColor: visited ? 'blue':'white'}}  onClick={handleVisited}>{ visited ?'visited':'going'}</button>
           {visited ? 'i am visited':'i want to visit'}
           
        </div>
    );
};

export default Country;