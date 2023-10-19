import React from 'react';
import './App.css';
import { Router } from './Router';
import minhaImagem from './Midia/62Z_2107.w020.n001.1244B.p15.1244-removebg-preview.png' //Imagem para Box

function App() {
  return (

    <div className="App">

<div class="inputBox_container">
  <svg class="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
    <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z">
    </path>
  </svg>
  <input class="inputBox" id="inputBox" type="text" placeholder="Pesquise no Universi"></input>
</div>


      <nav id='menu'>
        <input type='checkbox' id='responsive-menu' onClick='updatemenu()'/>
        <ul>
          <li><a href='http://'>Home</a></li>
          <li><a class='dropdown-arrow' href='http://'>Produtos</a>
            <ul class='sub-menus'>
              <li><a href='http://'>Products 1</a></li>
              <li><a href='http://'>Products 2</a></li>
              <li><a href='http://'>Products 3</a></li>
              <li><a href='http://'>Products 4</a></li>
      </ul>
          </li>
          <li><a href='http://'>Sobre Nós</a></li>
          <li><a class='dropdown-arrow' href='http://'>Serviços</a>
            <ul class='sub-menus'>
              <li><a href='http://'>Services 1</a></li>
              <li><a href='http://'>Services 2</a></li>
              <li><a href='http://'>Services 3</a></li>
      </ul>
          </li>
          <li><a href='http://'>Contate-nos</a></li>
        </ul>
      </nav>
      <header className="App-header">
      </header>

    <body>

      

    <div class="TextBody">
      <div className='boxText'></div>
      <h3></h3>
      <h1 class="ContentText">Trilhando o <br/>Caminho<br/>Para o Sucesso</h1>
      <p className='ContentText2'>Transforme linhas de código em soluções inovadoras. Desperte o programador em você <br /> e Crie o futuro digital!</p>

    </div>

    <div className='Imagem'>
      <img src={minhaImagem} alt="ImagemParabox" />
    </div>
    
    <div className='BoxUser'>
      
    </div>


    <footer className='footeer'>
    <div class="container">
            <p>&copy; 2023 Seu Site. Todos os direitos reservados.</p>
        </div>
    </footer>


    </body>

        <Router />
        

  </div>    

  );
}


export default App;