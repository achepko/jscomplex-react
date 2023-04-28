import React from 'react';

const Dog = ({dog,dispatch}) => {
    const {name} = dog;
    return (
        <div>
            <div>dogName:{name}</div>
            <button onClick={()=>dispatch({type:'DEL_DOG',payload:dog.id})}>Delete</button>
        </div>
    );
};

export default Dog;