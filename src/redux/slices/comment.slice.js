import {createSlice} from "@reduxjs/toolkit";


const initialState= {
    comments:[]
}

const slice = createSlice({
    name:'commentSlice',
    initialState,
    reducers:{
        setAll:(state, action)=>{
            state.comments = action.payload
        },
        create:(state, action)=>{
            state.comments.push(action.payload)
        }
    }
});

const {reducer:commentReducer,actions} = slice;

const commentActions = {
    ...actions
};

export {
    commentReducer,
    commentActions
}