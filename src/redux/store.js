import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer,commentReducer} from "./slices";

const rootReducer = combineReducers({
    users:userReducer,
    comments:commentReducer
});

const setupStore =()=> configureStore({
    reducer:rootReducer
});

export {
    setupStore
}