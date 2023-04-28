import React from 'react';
import {useForm} from "react-hook-form";
import Dog from "./Dog";

const Dogs = ({stateDispatch}) => {
    const {register, reset, handleSubmit} = useForm();

    const [{dogs}, dispatch] = stateDispatch;

    const saveDog = (dog) => {
        dispatch({type:'ADD_DOG',payload:dog})
        reset()
    };
    return (
        <div>
            <form onSubmit={handleSubmit(saveDog)}>
                <input type="text" placeholder={'dog'} {...register('name')}/>
                <button>save</button>
            </form>
            {dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
        </div>
    );
};

export default Dogs;