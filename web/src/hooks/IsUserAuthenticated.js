import {useNavigate} from 'react-router-dom';
import ls from '../services/localstorage';

function IsUserAuthenticated() {
    const navigate = useNavigate();
    const doctor =ls.get('doctor');
    let auth = () => { return doctor };
    if(!doctor){
        auth =  (redirectUrl = '/login') => navigate(redirectUrl);
    }

    return auth;
}

export default IsUserAuthenticated;