import React from 'react';
import './App.css';
import FeedAxios from "./containers/FeedAxios";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" className="CaixaPesquisa" placeholder="Pesquise no Universi.Me"></input>
      

      </header>
        <FeedAxios/>
        <button className="custom-button">Search</button>
      <div className="Quadrado"></div>
    </div>
  );
}

export default App;