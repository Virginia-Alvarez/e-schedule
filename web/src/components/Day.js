import Header from './Header';

const Day = ()=>{
    return(
        <>
        <Header/>
        <article className='mainSchedule'>
            <h1 className='title-schedule'>Día X(fecha del dia)</h1>
            <section className='section-hour'>
                <p className="info">horas:</p>
                <p className="info">tto</p>
            </section>
            {/* Realizaré un bucle para definir el nº de ttos que se verán el preview */}
        </article>
    </>            


    )
}

export default Day;