import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import './styleCalendar.css';

function Calendar() {
    const dropCalender = () =>{
        let calModule = document.querySelector('.calendar');
        calModule.classList.toggle('display-block');
    
        let searchModule = document.querySelector('.search');
        if(!searchModule.classList.contains("display.block")) {
          searchModule.querySelector('.input-search').value = '';
        }
        searchModule.classList.remove('display-block');
      }

   return (
    <>
        <FaRegCalendarAlt onClick={dropCalender} size='20' color='gray' className='icon icon-calendar'/>
        
        <div className='calendar'>
            <label htmlFor="month" className='label-calender'>Select month and year</label> <br/>
            <input className='input input-date' type="month" id="month" name="trip-start"  min="2023-01" max="2030-12" />
         </div>
    </>
  )
}

export default Calendar;