import React from 'react'
import axios from "axios"
import Main from './components/Main/Main'

function Api(props) {

  const [data, setData] = React.useState({
    "name": "name"
  })

 
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${props.loc}&units=metric&APPID=8846ecfd3437a6bb3da8fafa171d4f05`


  React.useEffect(() =>{
    axios.get(url)
    .then(res => setData(res.data))
    .catch(err => console.error(err))
  }, [props.loc])

  console.log(data)

  return (
    <Main 
    {...data}/> 
  )
}

export default Api