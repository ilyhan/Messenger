export const getMonthName = (month) => {
  const date = new Date();
  date.setMonth(month - 1); 
  const options = { month: 'long' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}




export const deleteMessage = async (e, id, editMess, dropBlock) =>{
    e.target.closest('div').style='opacity: 0; transition:1s; margin-left:auto';
    setTimeout(async ()=>{
    await fetch(`http://localhost:3001/messages/${id}`, {
      method: 'DELETE'
      })
    .then(response => {
      if (response.ok) {
        console.log('Объект успешно удален');
        dropBlock.removeEventListener('click', editMess);
      } else {
        console.error('Ошибка при удалении объекта');
      }
    })
    .catch(error => console.error('Ошибка соединения с сервером:', error));
  },1000);
}



export const changeMessage = async(setMessage, e, id, dropBlock, editMess) =>{
  let inputMes= document.querySelector('.messages__input');
  
  let oldMessage = e.target.closest('div').querySelector('[data-text]').innerText
  
  setMessage(oldMessage);
  let btn = document.querySelector('.button-send-mes');

  let change = async function() {
    if (inputMes.value === ''){
      deleteMessage(e, id, editMess, dropBlock);
    }else if (oldMessage !== inputMes.value){
      setMessage('');
      await fetch(`http://localhost:3001/messages/${id}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: inputMes.value, status: 'edited'} )
      })
      .then(()=>{
        btn.removeEventListener('click', change); 
        dropBlock.removeEventListener('click', editMess);
      })
    }
    setMessage('');
    btn.removeEventListener('click', change); 
    dropBlock.removeEventListener('click', editMess);
  }
  btn.addEventListener('click', change);
}




export const closeDropBlock = (e, event, close, dropBlock, editMess) =>{
  if(!e.target.closest('div').contains(event.target)){
    if (event.target.closest('div').className !== 'message' || event.target.closest('div').dataset.mess === 'notMyMess'){
       dropBlock.style.cssText  = `display: none`;
        document.removeEventListener('click', close);
    }
    dropBlock.removeEventListener('click', editMess);
  }
}




export const handleClick = async (e, id, setMessage) =>{
  let dropBlock = document.querySelector('.drop-block');
  dropBlock.style.cssText  = 
  `display: inline-block; 
  top:${e.clientY}px; 
  left:${e.clientX + 15}px; 
  z-index: 5`;

  let close = event => closeDropBlock(e, event, close, dropBlock, editMess);

  let editMess = async (event)=>{
    if (event.target.className === 'drop-block__item drop-block__item_delete'){
      deleteMessage(e, id, editMess, dropBlock);

    }else if(event.target.className === 'drop-block__item drop-block__item_change'){
      changeMessage(setMessage, e,  id, dropBlock, editMess);
    }

    dropBlock.removeEventListener('click', editMess);
  }

  dropBlock.addEventListener('click', editMess);
  document.addEventListener('click', close);
}





export  const scrollToButton = () => {
  var scrollElement = document.querySelector('.messages');
  if (scrollElement) {
      scrollElement.scrollTo({
          top: scrollElement.scrollHeight,
          behavior: 'smooth'
      });
  } else {
      scrollElement.scrollTop = scrollElement.scrollHeight;
  }
}