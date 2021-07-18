import React from 'react';
import s from './App.module.scss';
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes/Routes";
import Nav from "./components/nav/nav";



const App = () => {
    return (
        <BrowserRouter>
            <div className={s.App}>
                <Nav/>
                <Routes/>
            </div>
        </BrowserRouter>
);
}

export default App;