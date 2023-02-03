import { Link } from "react-router-dom";
import Footer from './Footer';

const Login = (props) =>{
    return(
        
        <div className="loginContainer">
            <div className="step2">
                <input type="checkbox" id="chk" aria-hidden="true"/>
                    <div className="signup">
                        <form method="post">
                            <label htmlFor="chk" aria-hidden="true">Sign up</label>
                            <input type="text" name="txt" placeholder="User name" required=""/>
                            <input type="email" name="email" placeholder="Email" required=""/>
                            <input type="password" name="pswd" placeholder="Password" required=""/>
                            <button className="button" >Sign up</button>
                        </form>
                    </div>
                    <div className="login">
                        <form method="post">
                            <label htmlFor="chk" aria-hidden="true">Login</label>
                            <input type="email" name="email" placeholder="Email" required=""/>
                            <input type="password" name="pswd" placeholder="Password" required=""/>
                            <Link  className="button" to='/previews'>Login</Link>
                            {/* cambio button por LINK temporalmenmte. luego cambiar a button otra vez cuando tenga bd */}
                        </form>
                    </div>
            </div>
            <Footer/>
        </div>
        
    
        )
};

export default Login;