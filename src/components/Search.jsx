import React from 'react'
import "./search.css"

function Search() {
  return (
    <div className='search-bar'>
      <input
        type="text"
        name="search"
        onChange={""}
        placeholder="Search"
      />
    </div>
  )
}

export default Search