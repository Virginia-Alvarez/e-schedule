import Header from './Header';
import { useEffect, useState } from 'react';
import treatmentsApi from '../services/api-treatments';
import IsUserAuthenticated from '../hooks/IsUserAuthenticated';
import { getCurrentWeek } from '../utils/utils';

const Week=(props)=>{
    const [treatments, setTreatments] = useState ([]);
    const [selectedDate, setSelectedDate] = useState (new Date().getDay());
    const auth = IsUserAuthenticated();
    useEffect(() => {
        const doctor = auth();
        if(doctor) {
            retrieveTreatmenst(doctor);
        }
      }, [props.doctorId, props.date, props]);

    const retrieveTreatmenst = async (doctor) => {
        const week = getCurrentWeek();
        const treatments = [];
        for(let day in week){
            await treatmentsApi.getTreatmentsFromApi(doctor.doctorId, week[day]).then(response => {
                treatments.push(response);
            });
        }
        setTreatments(treatments);
    }  

    const handleSelectedDate = (ev) => {
        const date =  ev.target.getAttribute("data-id");
        setSelectedDate(date);
    }

    const renderTreatments = (day) => {
        return treatments[day - 1]?.map((treatment) => {
            return (
                <section className='section-hour'>
                    <p className="info">{treatment.date}</p>
                    <p className="info">{treatment.hour}</p>
                    <p className="info">{treatment.description}</p>
                </section>
            );
        });
    }
    return(
        <>
        <Header/>
        <nav className='nav-week'>
            <button onClick={handleSelectedDate} data-id="1" href="">Lunes</button>
            <button onClick={handleSelectedDate} data-id="2" href="">Martes</button>    
            <button onClick={handleSelectedDate} data-id="3" href="">Miércoles</button>
            <button onClick={handleSelectedDate} data-id="4" href="">Jueves</button>
            <button onClick={handleSelectedDate} data-id="5" href="">Viernes</button>
        </nav>
         <article className='mainSchedule'>
            <h1 className='title-schedule'></h1>
            {renderTreatments(selectedDate)}
        </article>
        </>
    )
}

export default Week;