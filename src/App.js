import React from 'react';
import Header from './components/header/Header';
import Profile from './components/profiile/profile';
import Sidebar from './components/sitebar/sitebar';
import Dialogs from './components/dialogs/dialogs';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import  './App.css';



const App = (props) => {
    return (
        <BrowserRouter>
            <div className="grid">
                <Header/>
                <Sidebar/>
                <div className="app_content">
                    <Switch>
                        <Route path='/dialogs' render={() => <Dialogs dialogspage={props.state.dialogspage} dispatch={props.dispatch}/>} />
                        <Route path='/profile' render={() => <Profile profilepage={props.state.profilepage} dispatch={props.dispatch}/>} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
