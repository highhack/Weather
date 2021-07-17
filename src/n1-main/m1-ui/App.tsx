import React from 'react';
import s from './App.module.scss';
import {BrowserRouter} from "react-router-dom";
import WeatherBoard from "./components/weatherBorder/weatherBoard";
import Routes from "./routes/Routes";
import {Grid} from "@material-ui/core";
import Nav from "./components/nav/nav";
import Board from "./components/border/board";


const App = () => {
    return (
        <BrowserRouter>
            <div className={s.App}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Nav/>
                    </Grid>
                    <Grid item xs={6}>
                        <WeatherBoard/>
                    </Grid>
                    <Grid item xs={6}>
                        <Board/>
                    </Grid>
                </Grid>
                <div>
                    <Routes/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;