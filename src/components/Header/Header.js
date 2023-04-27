import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'posts'}>POSTS</NavLink>
            <NavLink to={'comments'}>COMMENTS</NavLink>
            <NavLink to={'cats_dogs'}>CATS AND DOGS</NavLink>
        </div>
    );
};

export default Header;