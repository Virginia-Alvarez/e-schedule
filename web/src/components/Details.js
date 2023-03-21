import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import treatmentsApi from '../services/api-treatments';
import IsUserAuthenticated from '../hooks/IsUserAuthenticated';
import Header from './Header';

const Details = (props) =>{
    const {treatmentId} = useParams();
    const [treatments, setTreatments] = useState ([]);
    const auth = IsUserAuthenticated();
    useEffect(() => {
        const doctor = auth();
        if(doctor) {
            treatmentsApi.getTreatmentDetailFromApi(doctor.doctorId, treatmentId).then(response => {
            setTreatments(response);
            });
        }
      }, [treatmentId]);

    const renderTreatments = () => {
        return treatments.map((treatment) => {
            return (
                <section className='section-hour'>
                    <p className="info">{treatment.date}</p>
                    <p className="info">{treatment.hour}</p>
                    <p className="info">{treatment.description}</p>
                    <p className="info">{treatment.cabinet}</p>
                    <p className="info">{treatment.observation}</p>
                </section>
            );
        });
    }
    return(
        <>
            <Header />
            <section className='mainSchedule'   >
                <h1>Detalle del tratamiento</h1>
                {renderTreatments()}
            </section>
        </>
    )
}

export default Details;