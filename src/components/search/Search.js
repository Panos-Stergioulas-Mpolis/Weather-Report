import React from 'react'
import "./search.css"
import {FiSearch} from "react-icons/fi" 

function Search(props) {

  const [search, setSearch] = React.useState();

  function chanheSearch(event){
    setSearch(event.target.value)
  }
    

  return (
    <div className='search-bar'>
        <input
        className='in'
        type="text"
        placeholder='Search'
        value = {search}
        onChange = {chanheSearch}
        />
        <div className='s-button' onClick={() => props.func(search)}><FiSearch/></div>
    </div>
  )
}

export default Search