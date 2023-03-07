import React from 'react'
import "./main.css"

function Main(props) {
  if(props.name !=="name"){
    return (
      <div className='main'>
        <div className='info'>
        <div>Location</div>
          {props.name}
          </div>
        <div  className='info'>
        <div>Weather</div>
          {props.weather[0].main}
          </div>
        <div  className='info'>
          <div>Temperature</div>
          {props.main.temp} F
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