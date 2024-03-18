import './components/styleVar.css';
import React  from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Chat from "./components/chat/Chat";
import SignUp from "./components/signUp/SignUp.jsx";
import Login from './components/login/Login.jsx';
import './App.css';
import './components/toggleClasses.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/' element={<Login />} />
        <Route path='*' element={<Login />} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;