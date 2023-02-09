import { Link } from "react-router-dom";

const Header =()=>{
    return(
        <header className="header">
        <nav className="nav-bar">
            <Link className="nav-options" to='/'>Home</Link>
            <Link className="nav-options" to='/day'>Día</Link>
            <Link className="nav-options" to='/week'>Semana</Link>
            <Link className="nav-options" to='/month'>Mes</Link>
            <Link className="nav-options" to='/'>Salir</Link>
        </nav>
    </header>
    )
}

export default Header;