import React from 'react';
import './styleDropMenu.css';

function DropMenu() {
   return (
    <div className='drop-block'>
        <ul className='drop-block__list'>
            <li className='drop-block__item drop-block__item_delete'>Delete</li>
            <li className='drop-block__item drop-block__item_change'>Edit</li>
        </ul>
    </div> 
  )
}

export default DropMenu;