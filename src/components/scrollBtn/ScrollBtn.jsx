import React, {useEffect} from 'react';
import { IoIosArrowDown } from "react-icons/io";
import './styleScrollBtn.css';

function ScrollBtn({scrollToButton}) {
    useEffect(()=>{
        let scrollBtn = document.getElementById('scrollButton');
        let scrollMessBlock = document.querySelector('.scroll-block');
    
        if(scrollMessBlock.scrollHeight<1000){
          scrollBtn.classList.remove('display-block');
         }
    
        scrollMessBlock.addEventListener('scroll', ()=>{
           if(scrollMessBlock.scrollTop<scrollMessBlock.scrollHeight-1200){
            scrollBtn.classList.add('display-block');
           }else{
            scrollBtn.classList.remove('display-block');
           }
        })
    })
   return (
    <>
        <button id="scrollButton" className='scrollButton' onClick={scrollToButton}><IoIosArrowDown className='arrow' size={30}/></button>
    </>
  )
}

export default ScrollBtn;