import { Link } from "react-router-dom";

const Header =()=>{
    return(
        <header>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/'>Día</Link>
            <Link to='/'>Semana</Link>
            <Link to='/'>Mes</Link>
            <Link to='/'>Salir</Link>
        </nav>
    </header>
    )
}

export default Header;