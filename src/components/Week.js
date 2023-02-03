import Header from './Header';

const Week=()=>{
    return(
        <>
        <Header/>
        <nav className='nav-week'>
            <a href="">Lunes</a>
            <a href="">Martes</a>
            <a href="">Miércoles</a>
            <a href="">Jueves</a>
            <a href="">Viernes</a>
        </nav>
         <article className='mainSchedule'>
            <h1 className='title-schedule'>Jueves fecha</h1>
            <section className='section-hour'>
                <p className="info">horas:</p>
                <p className="info">tto</p>
            </section>
            {/* Realizaré un bucle para definir el nº de ttos que se verán el preview */}
        </article>
        </>
    )
}

export default Week;