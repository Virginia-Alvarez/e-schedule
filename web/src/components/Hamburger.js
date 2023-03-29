

const Hamburger =(props)=>{

    return(
        <div className="hamburger" onClick={props.handleClick}>
            <div className="burger burger1"></div>
            <div className="burger burger2"></div>
            <div className="burger burger3"></div>
        </div>
    )
}

export default Hamburger;