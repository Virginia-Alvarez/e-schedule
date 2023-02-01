import Header from './Header';

const Preview = () =>{
    return(
        <>
            <Header/>
            <article className='mainSchedule'>
                <h1 className='title-schedule'>Próximas consultas</h1>
                <section>
                    <p>horas</p>
                    <p>tto</p>
                </section>
                {/* Realizaré un bucle para definir el nº de ttos que se verán el preview */}
            </article>
        </>                       
    )
}

export default Preview;