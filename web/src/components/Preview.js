import Header from './Header';

const Preview = () =>{
    return(
        <>
            <Header/>
            <article className='mainSchedule'>
                <h1 className='title-schedule'>Próximas consultas</h1>
                <section className='section-hour'>
                    <p className="info">horas:</p>
                    <p className="info">tto</p>
                </section>
                <section className='section-hour'>
                    <p className="info">horas:</p>
                    <p className="info">tto</p>
                </section>
                <section className='section-hour'>
                    <p className="info">horas:</p>
                    <p className="info">tto</p>
                </section>
                {/* Realizaré un bucle para definir el nº de ttos que se verán el preview */}
            </article>
        </>                       
    )
}

export default Preview;