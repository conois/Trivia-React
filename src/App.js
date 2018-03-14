import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Titulo from './components/contenedorTitulo/';
import Botones from './components/contenedorBotones/index.js'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Titulo />
        <Botones />
      </div>
    );
  }
}

export default App;
