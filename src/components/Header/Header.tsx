import {FC} from "react";
import {useNavigate} from "react-router-dom";
import './Header.css'


const Header: FC = () => {

    const navigate = useNavigate();

    return (
        <div className={'Header'}>

            <button onClick={()=>navigate('albums')}>ALBUMS</button>
            <button onClick={()=>navigate('comments')}>COMMENTS</button>
            <button onClick={()=>navigate('todos')}>TODOS</button>

        </div>
    );
};

export default Header;