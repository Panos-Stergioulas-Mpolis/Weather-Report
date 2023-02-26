import React from 'react'
import "./styles.css"
import Search from './components/Search/Search'
import Api from './Api'
import Main from './components/Main/Main'


function App() {
  
  

  return (
    <div className='container'>
      <Search />
      <Main />
    </div>
  )
}

export default App