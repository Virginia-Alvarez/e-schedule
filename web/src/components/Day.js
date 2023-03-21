import Header from './Header';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import treatmentApi from '../services/api-treatments';
import IsUserAuthenticated from '../hooks/IsUserAuthenticated';

const Day = (props)=>{
    const [treatments, setTreatments] = useState ([]);
    const auth = IsUserAuthenticated();
    useEffect(() => {
        const doctor = auth();
        if(doctor) {
            treatmentApi.getTreatmentsFromApi(doctor.doctorId, props.date).then(response => {
            setTreatments(response);
            });
        }
      }, [props.doctorId, props.date, props]);

    const renderTreatments = () => {
        return treatments.map((treatment) => {
            return (
                <section className='section-hour'>
                    <p className="info">{treatment.date}</p>
                    <p className="info">{treatment.hour}</p>
                    <p className="info">{treatment.description}</p>
                    <Link to ={`/treatments/${treatment.id}`}>Ver Tratamiento</Link>
                </section>
            );
        });
    }
    return(
        <>
        <Header/>
        <article className='mainSchedule'>
            <h1 className='title-schedule'>Día {props.date}</h1>
            {renderTreatments()}
        </article>
    </>            


    )
}

export default Day;