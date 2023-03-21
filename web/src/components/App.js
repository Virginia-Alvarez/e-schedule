import '../styles/App.scss';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useState} from 'react';
import ls from '../services/localstorage';
import Login from './Login';
import Landing from './Landing';
import Preview from './Preview';
import Day from './Day';
import Week from './Week';
import Month from './Month';
import Details from './Details';

//services
import apiDoctor from '../services/api-doctor';

import { getFormatedDate } from '../utils/utils';

function App() {
  const navigate = useNavigate();
  // VARIABLES ESTADO
  const [date, setDate] = useState(getFormatedDate());
  const [doctorId, setDoctorId] = useState('');
 
  //login
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
   //sign up
   const [signUpErrorMessage, setSignUpErrorMessage] = useState('');

  // USEEFFECT ?
  const sendLoginToApi = loginData =>{
    setLoginErrorMessage('');
    const doctor =ls.get('doctor');
    if (!doctor){
      apiDoctor.sendLoginToApi(loginData).then(response =>{
        if (response.success ===true){
          setDoctorId (response);
          ls.set('doctor',response);  
          navigate('/previews');
        }else {
          setLoginErrorMessage(response.errorMessage);
        }
      });
    }else {
      setDoctorId (doctor.doctorId);
      navigate('/previews');
    }
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


  // FUNCIONES HANDLER

  const handleDate=(value)=>{
    setDate(value)
  };

  const handleAllTreatments = data => {
    if (data.key === 'doctor') {
      setDoctorId(data.value);
    } else if (data.key === 'date') {
      setDate(data.value);
    }
  };

 

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <div className="app">
        <main>
          <Routes>
            
            <Route
              path='/login'
              element= {
                <Login loginErrorMessage={loginErrorMessage} signUpErrorMessage={signUpErrorMessage} sendLoginToApi={sendLoginToApi} sendSignupToApi={sendSignupToApi}/>
              }
            />
            <Route
              path='/previews'
              element= {
                <Preview date={date}/>
              }
            />
            <Route
              path='/day'
              element= {
                <Day date={date}/>
              }
            />
             <Route
              path='/treatments/:treatmentId'
              element= {
                <Details />
              }
            />
            <Route
              path='/week'
              element= {
                <Week date={date}/>
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
            <Route exact path='/'
              element= {
                <Landing/>
              }
            />
          </Routes>
        </main>
    </div>
  );
}

export default App;
