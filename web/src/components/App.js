import '../styles/App.scss';
import {Routes, Route} from 'react-router-dom';
import { useEffect, useState} from 'react';
import Login from './Login';
import Landing from './Landing';
import Preview from './Preview';
import Footer from './Footer';
import Day from './Day';
import Week from './Week';
import Month from './Month';

//services
import apiDoctor from '../services/api-doctor';
import router from '../services/router';


function App() {
  // VARIABLES ESTADO
  const [date, setDate] = useState(new Date());
  const [DoctorId, setDoctorId] = useState('');
  const [doctorEmail, setDoctorEmail]= useState('');
  const [doctorPassword, setDoctorPassword] = useState ('');
  const [doctorTreatment, setDoctorTreatment] = useState ([]);

  // USEEFFECT ?
  const sendLoginToApi = loginData =>{
    apiDoctor.sendLoginToApi(loginData).then(response =>{
      if (response.success ===true){
        setDoctorId (response.doctorId);
        router.redirect ('/');
      }else {
        // error
      }
    });
  };

  /*
  Event: cerrar sesión.
  Redireccionamos al inicio de la página.
  Recargamos la página para que se borren todos los datos del estado de React.
  */
  const logout = () => {
    router.redirect('/');
    router.reload();
  };


  // FUNCIONES HANDLER

  const handleDate=(value)=>{
    setDate(value)
  };

 

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
            <Route
              path='/day'
              element= {
                <Day/>
              }
            />
            <Route
              path='/week'
              element= {
                <Week/>
              }
            />
            <Route
              path='/month'
              element= {
                <Month
                  date = {date}
                  handleDate = {handleDate}
                />
              }
            />
          </Routes>
        </main>
    </div>
  );
}

export default App;
