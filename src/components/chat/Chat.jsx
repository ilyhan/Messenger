import React, { useState, useEffect}  from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import '../../App.css';
import { fetchMessages, fetchPost } from '../serverReq/API';
import { getMonthName, handleClick, scrollToButton } from './function';
import DropMenu from '../dropMenu/DropMenu';
import Header from '../header/Header';
import Message from '../message/Message';
import './styleChat.css';
import ScrollBtn from '../scrollBtn/ScrollBtn.jsx'

function Chat() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const nickname = (localStorage.getItem('idUser') ? JSON.parse(localStorage.getItem('idUser')) : {nickname: ''}).nickname;
  const name = (localStorage.getItem('idUser') ? JSON.parse(localStorage.getItem('idUser')) : {name: ''}).name;

  let tmpDate = 0;



  const sendMessage = () =>{
    if(message.length !== 0){
      let now = new Date();

      const data = {id: uuidv4(), 
        author: nickname,
        text: message, 
        time: {
          hours: now.getHours(),
          minutes: now.getMinutes()
        }, 
        date: {
          day: now.getDate(),
          month: now.getMonth()+1,
          year: now.getFullYear()
        },
        status:  ''
      }

      fetchPost('http://localhost:3001/messages', data);

      console.log('message send', message);
      setMessage('');
      setTimeout(()=>scrollToButton(), 500)
    }
  }

  useEffect(() => {
    let t ;
    const fetchData = async () => {
      let inpSearch = document.querySelector('.input-search');
      let inpDate = document.querySelector('.input-date');
      if(inpSearch || inpDate){
        setChat(await fetchMessages(inpSearch.value, inpDate.value));
      } else {
        setChat(await fetchMessages('', ''));
      }
      setTimeout(async () => fetchData(), 500)
    };

    fetchData();
    if(!nickname.length){
      clearTimeout(t);
      navigate('/');
    }
    
  }, [navigate,nickname]);

  const setDatefunnc = (day, month)=>{
    tmpDate = day;
    let monthName = getMonthName(month);
    return <p className='date-send'>{day + " " + monthName}</p>
  }


  return (
    <>   
      <Header name={name} nickname={nickname}/>

      <div className='wrapper wrapper_chat' >
        <div className='messages scroll-block' >
          {chat.map(message => (
            <>
            {tmpDate !== message.date.day ? setDatefunnc(message.date.day, message.date.month) : ''}
            <Message message={message} nickname={nickname} handleClick={handleClick} setMessage={setMessage}/>
            </>
          ))}
          <ScrollBtn scrollToButton={scrollToButton}/>
        </div>

        <div className='send-message'>
          <input className='input messages__input' type="textarea" value={message} onChange={(e) => {setMessage(e.target.value)}} />
          <button className='button button-send-mes' onClick={()=>sendMessage()}>Send</button>
        </div>
      </div>
      <DropMenu />
    </>
  );
}

export default Chat;