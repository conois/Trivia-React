import React, { Component } from 'react';
import './App.css';

//Components
import Titulo from './components/contenedorTitulo/';
import Botones from './components/contenedorBotones/index.js';
import BoxQuestions from './components/contenedorPreguntas/Preguntas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Titulo />
        <Botones />
        <BoxQuestions />
      </div>
    );
  }
}

export default App;
