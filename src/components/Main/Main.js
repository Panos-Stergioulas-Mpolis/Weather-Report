import React from 'react'

function Main(props) {
  if(props.name !=="name"){
    return (
      <div>{props.weather[0].main}{props.name}</div>
    )
  }
  else{
    return (
      <div></div>
    )
  }
 
}

export default Main