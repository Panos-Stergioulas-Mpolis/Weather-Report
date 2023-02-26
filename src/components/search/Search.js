import React from 'react'
import "./search.css"
import {FiSearch} from "react-icons/fi" 

function Search() {

  const [search, setSearch] = React.useEffect();
    

  return (
    <form className='search-bar'>
        <input
        className='in'
        type="text"
        placeholder='Search'
        value = {search}
        onChange = {event => setSearch(event.target.value)}
        />
        <button type='submit' className='s-button'><FiSearch/></button>
    </form>
  )
}

export default Search