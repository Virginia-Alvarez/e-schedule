import { Link } from "react-router-dom";

const Header =()=>{
    return(
        <header className="header">
        <nav className="nav-bar">
            <Link className="nav-options" to='/'>Home</Link>
            <Link className="nav-options" to='/día'>Día</Link>
            <Link className="nav-options" to='/semana'>Semana</Link>
            <Link className="nav-options" to='/mes'>Mes</Link>
            <Link className="nav-options" to='/'>Salir</Link>
        </nav>
    </header>
    )
}

export default Header;