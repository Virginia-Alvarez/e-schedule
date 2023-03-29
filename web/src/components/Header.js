import { Link } from "react-router-dom";
import { useState} from 'react';
import { Divide as Hamburger } from 'hamburger-react'

import iconHome from '../images/home.png'
import iconDay from '../images/day.png'
import iconWeek from '../images/week.png'
import iconMonth from '../images/month.png'
import iconLogOut from '../images/logout.png'



const Header =()=>{
    const [hamburgerVisible, sethamburgerVisible] =useState(true);

    const toogleHamburger =()=>{
        sethamburgerVisible(!hamburgerVisible)
        document.documentElement.style.setProperty(`--hamburgerVisible`, hamburgerVisible);
    }

    document.documentElement.style.setProperty(`--hamburgerVisible`, hamburgerVisible)

    return(
        <header className="header">
            <nav className="nav-bar">
                <Link className="nav-options" to='/'><img className="icon"src={iconHome} alt="imagen de una casa" /></Link>
                <Link className="nav-options" to='/day'><img className="icon" src={iconDay} alt="" /></Link>
                <Link className="nav-options" to='/week'><img className="icon"src={iconWeek} alt="" /></Link>
                <Link className="nav-options" to='/month'><img className="icon" src={iconMonth} alt="" /></Link>
                <Link className="nav-options" to='/'><img className="icon" src={iconLogOut} alt="" /></Link>
            </nav>
            <Hamburger color="#2193AD" isVisible={hamburgerVisible} handleClick={toogleHamburger}/>
        </header>
    )
}

export default Header;