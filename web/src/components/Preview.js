import Header from './Header';
import { useEffect, useState } from 'react';
import treatmentApi from '../services/api-treatments';
import IsUserAuthenticated from '../hooks/IsUserAuthenticated';
import iconTreatment from '../images/corazon2.png';

const Preview = (props) =>{
    //Treatments
    const [treatments, setTreatments] = useState ([]);
    const MAX_SIZE_PREVIEW = 3;

    const auth = IsUserAuthenticated();

    useEffect(() => {
        const doctor = auth();
        if(doctor) {
            treatmentApi.getTreatmentsFromApi(doctor.doctorId, props.date, MAX_SIZE_PREVIEW).then(response => {
            setTreatments(response);
            });
        }
      }, [props.date, props]);

    const renderTreatments = () => {
        return treatments.map((treatment, index) => {
            return (
                <section className='section-hour'>
                    <div className='box-hour'>
                        <img className="icon-detail" src={iconTreatment} alt="corazon" />
                        <p className="hour">{treatment.hour}</p>
                    </div>
                    <p className="info">{treatment.description}</p>
                </section>
            );
        });
    }

    return(
        <>
            <Header/>
            <article className='mainSchedule'>
                <h1 className='title-schedule'>Próximas consultas</h1>
                {renderTreatments()}
            </article>
        </>                       
    )
}

export default Preview;