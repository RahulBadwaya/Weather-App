import { useState } from "react";
import { Link } from "react-router-dom";


const Home =()=>{
  const [city , setCity] = useState(null)
  const searchCity=(event)=>{
   event.preventDefault()
  }
  return (
      <>
       <div className='mainContainer'>
      <div className='container'>
          <h2>Weather App</h2>
       <form onSubmit={searchCity}>
        <input type="search" onChange={(e)=>setCity(e.target.value)} placeholder="City Name"/><br/>
        <Link to={"/dashboard/"+city}>
        <button type="submit"><span></span>search</button>
        </Link>
       </form>
      </div>

    </div>
      </>
  )
} 
export default Home;