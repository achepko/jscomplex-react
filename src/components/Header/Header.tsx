import {FC} from "react";
import css from './Header.module.css'
import {useNavigate} from "react-router-dom";

const Header: FC = () => {

    const navigate = useNavigate();

    return (
        <div className={css.Header}>
            <button onClick={()=>navigate('cars')}>CARS</button>
            <button onClick={()=>navigate('users')}>USERS</button>
            <button onClick={()=>navigate('posts')}>POSTS</button>
        </div>
    );
};

export {Header};