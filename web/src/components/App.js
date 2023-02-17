import '../styles/App.scss';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useEffect, useState} from 'react';
import Login from './Login';
import Landing from './Landing';
import Preview from './Preview';
import Day from './Day';
import Week from './Week';
import Month from './Month';

//services
import apiDoctor from '../services/api-doctor';


function App() {
  const navigate = useNavigate();
  // VARIABLES ESTADO
  const [date, setDate] = useState(new Date());
  const [doctorId, setDoctorId] = useState('');
  // const [doctorEmail, setDoctorEmail]= useState('');
  // const [doctorPassword, setDoctorPassword] = useState ('');
  // const [doctorTreatment, setDoctorTreatment] = useState ([]);

  //login
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
   //sign up
   const [signUpErrorMessage, setSignUpErrorMessage] = useState('');

  // USEEFFECT ?
  const sendLoginToApi = loginData =>{
    setLoginErrorMessage('');
    apiDoctor.sendLoginToApi(loginData).then(response =>{
      if (response.success ===true){
        setDoctorId (response.doctorId);
        navigate('/previews');
      }else {
        setLoginErrorMessage(response.errorMessage);
      }
    });
  };

  const sendSignupToApi = signUpData =>{
    setLoginErrorMessage('');
    apiDoctor.sendSingUpToApi(signUpData).then(response =>{
      if (response.success ===true){
        setDoctorId (response.doctorId);
        navigate('/previews');
      }else {
        setSignUpErrorMessage(response.errorMessage);
      }
    });
  };

  /*
  Event: cerrar sesión.
  Redireccionamos al inicio de la página.
  Recargamos la página para que se borren todos los datos del estado de React.
  */
  // const logout = () => {
  //   router.redirect('/');
  //   router.reload();
  // };


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
            <Route exact path='/'
              element= {
                <Landing/>
              }
            />
            <Route
              path='/login'
              element= {
                <Login loginErrorMessage={loginErrorMessage} signUpErrorMessage={signUpErrorMessage} sendLoginToApi={sendLoginToApi} sendSignupToApi={sendSignupToApi}/>
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
