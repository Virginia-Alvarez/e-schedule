import { Link } from "react-router-dom";
import Footer from './Footer';
import landingImg from '../images/landing.png';

const Landing = () =>{
    return (
        <div className="main">
             <div >
                <img className="img-landing" src={landingImg} alt="Imagen de una agenda" />
            </div>
            <div className='landing'>
                <h1 className='title-landing'>Bienvenido a tu agenda</h1>
                <Link className='btn-start' to='/login'>Comenzar</Link>
            </div>
            <div className="area" >
                <ul className="circles">
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
            <Footer/>
        </div>
    )
}

export default Landing;