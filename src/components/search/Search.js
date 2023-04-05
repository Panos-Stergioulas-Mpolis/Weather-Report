import React from 'react'
import {FiSearch} from "react-icons/fi" 

function Search(props) {

  const [search, setSearch] = React.useState();

  function chanheSearch(event){
    setSearch(event.target.value)
  }
  
  return (
    <div className='flex mx-auto items-center relative w-[80%] ml:w-[40%]'>
        <input
        className='w-[100%]  rounded-[10px] border-none px-[15px] text-white py-[10px] bg-bg-color'
        type="text"
        placeholder='Search'
        value = {search}
        onChange = {chanheSearch}
        />
        <div className='absolute right-[0] px-[15px] py-[10px]  text-[20px] text-white hover:cursor-pointer' onClick={() => props.func(search)}><FiSearch/></div>
    </div>
  )
}

export default Search