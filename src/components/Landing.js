import { Link } from "react-router-dom";

const Landing = () =>{
    return (
        <div className="main">
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
        </div>
    )
}

export default Landing;