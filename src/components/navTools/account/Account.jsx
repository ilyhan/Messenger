import React  from 'react';
import { MdOutlineAccountCircle } from "react-icons/md";
import './styleAccount.css';


// :root{
//   --theme-color: rgb(21, 20, 20);
//   --chat-color: rgba(56, 55, 55, 0.174);
//   --nav-color: rgba(56, 55, 55, 0.174);
//   --title-color: rgb(37, 34, 34);
// }

// /* --theme-color: rgb(237,238,240);
// --chat-color: rgb(255, 255, 255);
// --nav-color: rgb(245, 246, 249); */


function Account({name, nickname}) {

  const dropAccount = ()=>{
    let accountModule = document.querySelector('.account');
    accountModule.classList.toggle('display-block');
  }

  const changeTheme = (e) =>{
    if(e.target.checked ){
      document.documentElement.style.setProperty('--theme-color', 'rgb(21, 20, 20)');
      document.documentElement.style.setProperty('--chat-color', 'rgba(56, 55, 55, 0.174)');
      document.documentElement.style.setProperty('--nav-color', 'rgb(30, 30, 30)');
      document.documentElement.style.setProperty('--text-color', 'rgb(256, 256, 256)');
      document.documentElement.style.setProperty('--logo-color', 'rgb(73, 73, 202)');
    }else{
      document.documentElement.style.setProperty('--theme-color', 'rgb(237,238,240)');
      document.documentElement.style.setProperty('--chat-color', 'rgb(255, 255, 255)');
      document.documentElement.style.setProperty('--nav-color', 'rgb(245, 246, 249)');
      document.documentElement.style.setProperty('--text-color', 'rgb(115, 115, 115)');
      document.documentElement.style.setProperty('--logo-color', 'rgb(0, 0, 0)');
    }
  }
  
  return (
    <div>
      <MdOutlineAccountCircle onClick={dropAccount} size='30' color='gray' className='icon icon-account'/>
      <div className='account'>
          <h2 className='option-title'>ACCOUNT</h2>
          <div className='info-user'>
              <span>{name}</span> <br/>
              <span className='type-info'>Username</span>
          </div>
          <div className='info-user'>
              <span>{'@' + nickname}</span> <br/>
              <span className='type-info'>Nickname</span>
          </div>
          <h2 className='option-title'>OPTIONS</h2>
          <div className='switch'>
              <span>Dark mode</span>
              <label className="switch-case">
              <input type="checkbox" onClick={(e) => changeTheme(e)}/>
              <span className="slider round"></span>
              </label>
          </div>
          
          <button className='button button__logout' onClick={()=>{localStorage.setItem('idUser', '')}} type='button'>Logout</button>
      </div>
    </div>
  );
}

export default Account;