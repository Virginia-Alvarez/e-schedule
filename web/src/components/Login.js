import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Footer from './Footer';
import SignUp from './SignUp';

const Login = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //events
    
    const handleEmail = ev =>{
        setEmail (ev.target.value);
    }

    const handlePassword = ev =>{
        setPassword (ev.target.value);
    }

    const handleForm = ev =>{
        ev.preventDefault();
        props.sendLoginToApi({
            email: email,
            password: password
        });
    }

      const renderErrorMessage = () => {
    // Si el API ha devuelto un error, App lo guarda en su estado y nos lo pasa por props
    if (props.loginErrorMessage !== '') {
      return (
        <p className="error-message">
          Error en el login: <span className="">{props.loginErrorMessage}</span>
        </p>
      );
    }
  };

    return(
        
        <div className="loginContainer">
            <div className="step2">
                <input type="checkbox" id="chk" aria-hidden="true"/>
                    <div className="login">
                        <form method="post" onSubmit = {handleForm}>
                            <label htmlFor="chk" aria-hidden="true">Login</label>
                            <input type="email" name="email" placeholder="Email" id="email" value ={email} onChange = {handleEmail} required=""/>
                            <input type="password" name="pswd" placeholder="Password" id="password" value={password} onChange={handlePassword} required=""/>
                            <input className="button" type="submit" value="Login" />
                            {renderErrorMessage()}
                        </form>
                    </div>
                    <SignUp sendSignupToApi={props.sendSignupToApi} signUpErrorMessage={props.signUpErrorMessage}/>
            </div>
            <Footer/>
        </div>
        
    
        )
};

export default Login;