import '../styles/App.scss';
import {Routes, Route} from 'react-router-dom';
import { useEffect, useState} from 'react';
import Login from './Login';

function App() {
  // VARIABLES ESTADO

  // USEEFFECT ?

  // FUNCIONES HANDLER

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <div className="App">
      <body>
        <main className='main'>
          <div className='login'>
            <h1 className='title-landing'>Bienvenido a tu agenda</h1>
            <a className='btn-start'>Comenzar</a>
          </div>
          <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
          {/* <Login/> */}
        </main>
      </body>
      <footer className='footer'>
        <p>E-schedule</p>
        <p>&copy;Virginia Álvarez Aragón</p>
      </footer>
    </div>
  );
}

export default App;
