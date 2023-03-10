import React from 'react'
import "./main.css"

function Main(props) {
  
  if(props.name !=="name"){
    var weather = "";
    if(props.weather[0].main === "Clouds"){
      weather = "Clouds.png"
    }else if(props.weather[0].main === "Clear"){
      weather = "Sun.png"
    }else{
      weather = "Rain.png"
    }
    return (
      <div className='main'>
        <div className='loc-weath'>
        <div>
          <h1 className='location'>{props.name}</h1>
        </div>
        <div className='weather'>
        <div className='temp'>
          {props.main.temp} <smal className="cel">°C</smal>
          </div>
          <img className='weather-img' alt="icon" src={weather}/>
        </div>
        </div>
       <div className='main-footer'>
        <div className='info'>Feels Like <div className='info-temp'>{props.main.feels_like}<small className='inf-cel'>°C</small></div></div>
        <div className='info'>Min Temp <div className='info-temp'>{props.main.temp_min}<small className='inf-cel'>°C</small></div></div>
        <div className='info'>Max Temp <div className='info-temp'>{props.main.temp_max}<small className='inf-cel'>°C</small></div></div>
       </div>
      </div>
    )
  }
  else{
    return (
      <div></div>
    )
  }
 
}

export default Main