import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "./components/hoc/Provider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <App/>
    </Provider>
);
