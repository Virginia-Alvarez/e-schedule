import '../styles/App.scss';
import {Routes, Route} from 'react-router-dom';
import { useEffect, useState} from 'react';
import Login from './Login';
import Landing from './Landing';
import Preview from './Preview';
import Footer from './Footer';

function App() {
  // VARIABLES ESTADO

  // USEEFFECT ?

  // FUNCIONES HANDLER
 

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <div className="app">
        <main>
          <Routes>
            <Route
              path='/'
              element= {
                <>
                <Landing/>
                <Footer/>
                </>
              }
            />
            <Route
              path='/login'
              element= {
                <>
                <Login/>
                <Footer/>
                </>
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
    </div>
  );
}

export default App;
