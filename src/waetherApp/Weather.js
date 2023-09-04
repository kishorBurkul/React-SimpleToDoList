import React, { useEffect, useState } from "react";
import './Weather.css'
import Dwatch from "../DgitalWatch/Dwatch";


function Weather(){


   const apiKey ="cc2014ba1dc55238e614e698ac9e1e78" 
   const [data , setData] = useState('')
   const [search , setSearch] =useState('pune')
   
    const getWeatherData = async ()=>{
    const apiKey =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=cc2014ba1dc55238e614e698ac9e1e78`
    const response = await fetch(apiKey);
    const getResponse = await response.json()
    // console.log(getResponse)
    setData(getResponse.main);
    }

    useEffect(()=>{
     getWeatherData()
    },[search])

// const handlesubmit = ()=>{
//     getWeatherData(search)
// }

    return(<>
    <div className="col-md-12">

  <div className="weatheBg">
    <h2>Weather App</h2>

    <Dwatch/>
    <div className="d-grid gap-3 col-4 mt-4">
        <input type="text" className="form-control" value={search} onChange={(event)=>setSearch(event.target.value)}/>
        <button className="btn btn-primary" type="button" 
        // onClick={handlesubmit}

        >Search</button>
    </div>
    </div>
    
        <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded  weathBox">
        <img className="imgIcon" src="https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png"/>
        {!data?(<p>No Data Found</p>):(<div>
            <h5 className="weatherCity"><b>{search}</b></h5>
        <h6 className="weatherTemp">{data.temp}°C</h6> 
        <h6 className="">Min Temp:{data.temp_min}°C , Max Temp:{data.temp_max}°C</h6> 
        
        
        
        </div>)}
        
    </div>
    </div>
   
    

    </div>

    </>)
}
export default Weather