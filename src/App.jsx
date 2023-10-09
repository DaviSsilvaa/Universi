import React from 'react';
import './App.css';
import { Router } from './Router';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <input type="text" className="CaixaPesquisa" placeholder="Pesquise no Universi.Me"></input>
      </header>
        <Router />
        <button className="custom-button">Search</button>
      <div className="Quadrado"></div>
    </div>

  );
}

export default App;