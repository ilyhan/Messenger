import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

// { setIsLoggedIn }
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const signup = async()=>{
    await fetch('http://localhost:3001/users', {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({id: uuidv4(), username, nickname, password})
    }).then(responce => {
        if(responce.ok){
            console.log('ok')
            navigate("/");
        }
    }).catch(()=>{
        console.log("no ok")
    });
  }

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('idUser')){
      // navigate('/chat');
    }
  })

  const handleSignUp = async () => {
    if(nickname.length && username.length && password.length){
        try {
            await fetch(`http://localhost:3001/users?nickname=${nickname}`)
            .then(response => response.json())
            .then(data => {
                if(data.length === 0){
                    signup();
                }
                else{
                    console.log(data);
                    setError('This nickname is taken');
                }
            })
            .catch(error => console.log('Ошибка при запросе к серверу:', error));
           
        } catch (error) {
          console.error('Error logging in:', error);
        }
      }else{
        setError('Fill all input fields');
      }
    };

  return (
    <div className='wrapper'>
      <h1 className='logo'>NST</h1>
      <h2>Регистрация</h2>
      <input className='input form__name' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className='input form__name' type="text" placeholder="Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      <input className='input form__password'type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className='button button-sign-up' onClick={handleSignUp}>Sign up</button>
      <button className='button button_link' onClick={() =>navigate('/')}>I have an account</button>
      {error && <p style={{color: 'red', textAlign: 'center'}}>{error}</p>}
    </div>
  );
};

export default LoginForm;