import '../styles/App.scss';
import {Routes, Route} from 'react-router-dom';
import { useEffect, useState} from 'react';
import Login from './Login';
import Landing from './Landing';
import Preview from './Preview';

function App() {
  // VARIABLES ESTADO

  // USEEFFECT ?

  // FUNCIONES HANDLER
 

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <div className="App">
        <main>
          <Routes>
            <Route
              path='/'
              element= {
                <Landing/>
              }
            />
            <Route
              path='/login'
              element= {
                <Login/>
              }
            />
            <Route
              path='/previews'
              element= {
                <Preview/>
              }
            />
          </Routes>
        </main>
        <footer className='footer'>
        <p>E-schedule</p>
        <p>&copy;Virginia Álvarez Aragón</p>
      </footer>
    </div>
  );
}

export default App;
