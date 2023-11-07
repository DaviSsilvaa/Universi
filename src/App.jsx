import React, { useEffect } from 'react';
import './App.css';
import { Router } from './Router';
import Menu from './pages/Menu/Menu';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {

  const storedUsername = localStorage.getItem('username') || '';
  const storedToken = localStorage.getItem('token') || '';

  const [username, setUsername] = useState(storedUsername);
  const [token, setToken] = useState(storedToken);

  useEffect(() => {
    localStorage.setItem('username', username);
    localStorage.setItem('token', token);
  }, [username, token])

  return (

    <div className="App">
      <AppContext.Provider value={{username, token, setUsername, setToken}}>
        <Menu />
        <Router />
      </AppContext.Provider>

      <footer className='footeer'>
        <div class="container">
          <p>&copy; 2023 Seu Site. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>    
  );
}


export default App;