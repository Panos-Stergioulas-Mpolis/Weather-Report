import React from 'react'
import axios from "axios"
import Main from './components/Main/Main'

function Api(props) {

  const [data, setData] = React.useEffect({})
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${props.loc},uk&APPID=8846ecfd3437a6bb3da8fafa171d4f05`

  React.useEffect(() =>{
    axios.get(url)
    .then(res => setData(res.data))
    .catch(err => console.error(err))
  }, [])

  return (
    <div><Main key = {data.id} {...data}/></div>
  )
}

export default Api