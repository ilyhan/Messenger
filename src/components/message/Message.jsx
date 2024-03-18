import React from 'react';
import './styleMessage.css';

function Message({message, nickname, handleClick, setMessage}) {
    let isMyMess = message.author === nickname;
   return (
    <>

    <div key={message.id} 
        data-mess = {isMyMess ? 'myMess' : 'notMyMess'}
        onClick={ isMyMess ? (e)=>handleClick(e, message.id, setMessage): ()=>{}}
        className='message' 
        style={{ 
            marginLeft: isMyMess ? 'auto' : '0px',
            backgroundColor: isMyMess ? 'rgb(73, 73, 202)' : 'rgb(67, 98, 133)'
        }}>
        <p className='message__author'>
            {message.author}
        </p>
        <p data-text >
            {message.text}
        </p>
        <p className='time'>
            {message.status === 'edited'? 'edited ':''}
            {message.time.hours.toString().padStart(2, '0') + ":" + message.time.minutes.toString().padStart(2, '0')} 
        </p>
    </div>
    </>
  )
}

export default Message;