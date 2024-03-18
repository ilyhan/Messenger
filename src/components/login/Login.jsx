import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('idUser')){
      navigate('/chat');
    } 
  },[navigate])

  const handleLogin = async () => {
        try {
          const response = await fetch('http://localhost:3001/users');
          const users = await response.json();
    
          const user = users.find(user => user.nickname === username && user.password === password);
    
          if (user) {
            // Successfully login
            localStorage.setItem('idUser', JSON.stringify({id: user.id, nickname: user.nickname, name: user.username}));
            navigate("/chat");
          } else {
            console.log("username or password error")
            setError('Incorrect login or password');
          }
        } catch (error) {
          console.error('Error logging in:', error);
        }
      };

  return (
    <div className='wrapper'>
      <h1 className='logo'>NST</h1>
      <h2 >Вход в систему</h2>
      <input className='input form__name' type="text" placeholder="Nickname" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className='input form__password' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className='button' onClick={handleLogin}>Login</button>
      <button className='button button_link' onClick={() => navigate("/signup")}>I do not have an account</button>
      {error && <p style={{color: 'red', textAlign: 'center'}}>{error}</p>}
    </div>
  );
};

export default LoginForm;