import React, { useState } from 'react'
import "./search.css"

function Search() {

  const [search, setSearch] = useState(null)

  return (
    <div className='search-bar'>
      <input
        type="text"
        name="search"
        value={search}
        onChange={"handleSearchChange"}
        placeholder="Search"
      />
    </div>
  )
}

export default Search