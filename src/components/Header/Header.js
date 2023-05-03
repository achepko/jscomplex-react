import css from './Header.module.css'
import {useNavigate} from "react-router-dom";
const Header = () => {

    const navigate = useNavigate();
    return (
        <div className={css.Header}>

            <button onClick={()=>navigate('users')}>users</button>
            <button onClick={()=>navigate('comments')}>comments</button>
            <button onClick={()=>navigate('cars')}>cars</button>
        </div>
    );
};

export {Header} ;