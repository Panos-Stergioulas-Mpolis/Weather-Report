import React from 'react'
import Clouds from "../../assets/Clouds.png"
import Sun from "../../assets/Sun.png"
import Rain from "../../assets/Rain.png"

function Main(props) {
  
  if(props.name !=="name"){
    var weather = "";
    if(props.weather[0].main === "Clouds"){
      weather = Clouds
    }else if(props.weather[0].main === "Clear"){
      weather = Sun
    }else{
      weather = Rain
    }
    return (
      <div className='w-[70%] text-white mx-auto'>
        <div className='flex items-center justify-between my-0 mx-[90px]'>
        <div>
          <h1 className='text-[45px]'>{props.name}</h1>
        </div>
        <div className='flex items-center'>
        <div className='text-[40px] flex pt-[15px]'>
          {props.main.temp} <smal className="pt-[5px] text-[17px]">°C</smal>
          </div>
          <img className='w-[150px]' alt="icon" src={weather}/>
        </div>
        </div>
       <div className='bg-bg-color rounded-[20px] w-[100%] h-[90px] my-[60px] mx-auto flex items-center justify-between text-[20px] py-[10px] px-[20px]'>
        <div className='flex-col gap-[20px] '>Feels Like <div className='text-[22px]'>{props.main.feels_like}<small className='text-[15px] '>°C</small></div></div>
        <div className='flex-col gap-[20px] '>Min Temp <div className='text-[22px]'>{props.main.temp_min}<small className='text-[15px] '>°C</small></div></div>
        <div className='flex-col gap-[20px] '>Max Temp <div className='text-[22px]'>{props.main.temp_max}<small className='text-[15px] '>°C</small></div></div>
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