import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { getFormatedDate } from '../utils/utils';


const Month=(props)=>{
  const navigate = useNavigate();
  
  const handleChange = (ev)=>{
    props.handleDate(getFormatedDate(ev));
    navigate('/day');
  }
 
    return(
      <>
        <Header/>
        <article className='mainSchedule'>
          <h1 className='title-schedule'>Calendario</h1>
          <div className="calendar-container">
            <Calendar onChange={handleChange}/>
          </div>
          {/* <div className="text-center">
            Selected date: {props.date.toDateString()}
          </div> */}
        </article>
    </>
    )
}
  
export default Month;