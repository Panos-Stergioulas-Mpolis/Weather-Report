import React from 'react'
import "./assets/styles.css"
import Search from './components/search/Search'
import Api from './Api'
import Main from './components/Main/Main'


function App() {
  
  const [loc, setLoc] = React.useState("");

  function handleClic(aString){
    setLoc(aString)
  }
  

  return (
    <div className='container'>
      <Search func={handleClic}/>
      <Api loc = {loc}/>
    </div>
  )
}

export default App