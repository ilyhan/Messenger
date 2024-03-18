
import React from 'react';
import { FaSearch } from "react-icons/fa";
import './styleSearch.css';

function SearchNick() {
  const dropSearch = () =>{
    let searchModule = document.querySelector('.search');
    searchModule.classList.toggle('display-block');

    let calModule = document.querySelector('.calendar');
    calModule.classList.remove('display-block');

    if(!searchModule.classList.contains("display.block")) {
      searchModule.querySelector('.input-search').value = '';
    }
  }

   return (
    <>
        <FaSearch onClick={dropSearch} size='20' color='gray' className='icon icon-search'/>
        <div className='search'>
        <span className='type-search'>Search by nickname</span> <br/>
        <input className='input input-search'/>
        </div>
    </>
  )
}

export default SearchNick;