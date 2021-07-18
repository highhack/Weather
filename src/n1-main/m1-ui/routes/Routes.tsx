import React from "react";
import {Route, Switch} from "react-router-dom";
import WeatherBoard from "../components/weatherBorder/weatherBoard";
import {Grid} from "@material-ui/core";
import Board from "../components/border/board";
import News from "../components/news/News";
import clouds from "../common/icons/clouds.png";
import sun from "../common/icons/clearSky.png";
import rain from "../common/icons/rain.png";
import darkClouds from "../common/icons/darkClouds.png";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";

const Routes = React.memo(() => {

    const weather = useSelector<AppRootStateType, any>(state => state.weather)

    const image = (part: number) => {
        if (weather.weather.list[part].weather[0].description === 'broken clouds'
            || weather.weather.list[part].weather[0].description === 'scattered clouds'
            || weather.weather.list[part].weather[0].description === 'few clouds')
            return clouds
        else if (weather.weather.list[part].weather[0].description === 'clear sky')
            return sun
        else if (weather.weather.list[part].weather[0].description === 'light rain')
            return rain
        else if (weather.weather.list[part].weather[0].description === 'overcast clouds')
            return darkClouds
    }

    return (
        <div>
            <Switch>
                <Route exact path={'/'} render={() =>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <WeatherBoard image={image}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Board image={image}/>
                        </Grid>
                    </Grid>
                }/>
                <Route exact path={'/news'} render={() =>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <WeatherBoard image={image}/>
                        </Grid>
                        <Grid item xs={6}>
                            <News/>
                        </Grid>
                    </Grid>
                }/>
            </Switch>
        </div>
    );
});

export default Routes;