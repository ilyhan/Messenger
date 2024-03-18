import React from 'react';
import './styleHeader.css';
import SearchNick from '../navTools/search/SearchNick';
import Calendar from '../navTools/calendar/Calendar';
import Account from '../navTools/account/Account';


function Header({name, nickname}) {

   return (
    <>
        <nav className='nav'>
            <Account name={name} nickname={nickname}/>
            <h1>Общий чат</h1>
            <div className='nav__options'>
                <Calendar />
                <SearchNick />
            </div>
        </nav>
    </>
  )
}

export default Header;