import React from 'react';

const Cat = ({cat,dispatch}) => {
    const {name} = cat;
    return (
        <div>
            <div>catName:{name}</div>
            <button onClick={()=>dispatch({type:'DEL_CAT',payload:cat.id})}>delete</button>
        </div>
    );
};

export default Cat;