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
      <div className='mt-[-20px] sm:mt-[100px] w-[100%] text-white mx-auto space-y-[150px] sm:space-y-[60px]'>
        <div className='hidden ml:flex items-center justify-between  px-[240px]'>
        <div>
          <h1 className='text-[45px]'>{props.name}</h1>
        </div>
        <div className='flex items-center'>
        <div className='text-[40px] flex'>
          {props.main.temp} <span className="pt-[5px] text-[17px]">°C</span>
          </div>
          <img className='w-[150px] pb-[20px]' alt="icon" src={weather}/>
        </div>
        </div>
        

        <div className='flex-col mx-auto w-[90%]  ml:hidden space-y-[40px]'>
          <div>
            <h1 className='sm:text-[45px] text-[35px]'>{props.name}</h1>
          </div>
          <div className='flex mx-auto'>
            <div className='sm:text-[40px] text-[30px] flex items-center mx-auto'>
              {props.main.temp} <span className="pb-[13px] text-[15px]">°C</span>
            </div>
            <img className='w-[50%] px-[10%]' alt="icon" src={weather}/>
          </div>
        </div>


       <div className='bg-bg-color rounded-[20px] w-[90%] ml:w-[70%] h-[90px] my-[60px] mx-auto flex items-center justify-between text-[20px] py-[10px] px-[20px]'>
        <div className='flex-col gap-[20px] '>Feels Like <div className='text-[22px]'>{props.main.feels_like}<span className='text-[15px] '>°C</span></div></div>
        <div className='flex-col gap-[20px] '>Min Temp <div className='text-[22px]'>{props.main.temp_min}<span className='text-[15px] '>°C</span></div></div>
        <div className='flex-col gap-[20px] '>Max Temp <div className='text-[22px]'>{props.main.temp_max}<span className='text-[15px] '>°C</span></div></div>
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