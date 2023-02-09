import Calendar from 'react-calendar';
import Header from './Header';

const Month=(props)=>{
  const handleChange = (ev)=>{
    props.handleDate(ev);

  }
    return(
      <>
        <Header/>
        <article className='mainSchedule'>
          <h1 className='title-schedule'>Calendario</h1>
          <div className="calendar-container">
            <Calendar onChange={handleChange} value={props.date}/>
          </div>
          {/* <div className="text-center">
            Selected date: {props.date.toDateString()}
          </div> */}
        </article>
    </>
    )
}

export default Month;