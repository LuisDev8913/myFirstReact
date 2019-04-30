import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderDomTree =(state)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>, document.getElementById('root'));
};


rerenderDomTree(store.getState());

store.subscribe(() =>{
    let state = store.getState();
    rerenderDomTree(state);
});

serviceWorker.unregister();