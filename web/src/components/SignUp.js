import React, { useState } from 'react';

const SignUp = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    //events
    
    const handleEmail = ev =>{
        setEmail (ev.target.value);
    }

    const handlePassword = ev =>{
        setPassword (ev.target.value);
    }

    const handleUsername = ev =>{
        setUsername (ev.target.value);
    }

    const handleForm = ev =>{
        ev.preventDefault();
        props.sendSignupToApi({
            username: username,
            email: email,
            password: password
        });
    }

      const renderErrorMessage = () => {
    // Si el API ha devuelto un error, App lo guarda en su estado y nos lo pasa por props
    if (props.signUpErrorMessage !== '') {
      return (
        <p className="error-message">
          Error en el alta: <span className="">{props.signUpErrorMessage}</span>
        </p>
      );
    }
  };

    return( 
        <div className="sign-up">
            <form method="post" onSubmit={handleForm}>
                <label htmlFor="chk" aria-hidden="true">Sign up</label>
                <input type="text" name="txt" placeholder="Username" id="signup-username" value ={username} onChange = {handleUsername} required=""/>
                <input type="email" name="email" placeholder="Email" id="signup-email" value ={email} onChange = {handleEmail} required=""/>
                <input type="password" name="pswd" placeholder="Password" id="signup-password" value ={password} onChange = {handlePassword} required=""/>                
                <input className="button" type="submit" value="Sign Up" />
                {renderErrorMessage()}
            </form>
        </div>
        )
};

export default SignUp;