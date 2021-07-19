import React from "react";
import {Route, Switch} from "react-router-dom";
import WeatherBoard from "../components/weatherBorder/weatherBoard";
import Board from "../components/border/board";
import News from "../components/news/News";
import clouds from "../common/icons/clouds.png";
import sun from "../common/icons/clearSky.png";
import rain from "../common/icons/rain.png";
import darkClouds from "../common/icons/darkClouds.png";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";
import s from './Routes.module.scss'

const Routes = React.memo(() => {

    const weather = useSelector<AppRootStateType, any>(state => state.weather)


    const image = (part: number) => {
        if (weather.weather.list[part].weather[0].main === 'Clouds')
            return clouds
        else if (weather.weather.list[part].weather[0].main === 'Clear')
            return sun
        else if (weather.weather.list[part].weather[0].main === 'Rain')
            return rain
        else if (weather.weather.list[part].weather[0].description === 'overcast clouds')
            return darkClouds
    }

    return (
        <div>
            <Switch>
                <Route  exact path={'/weather'} render={() => <div className={s.weather}>
                    <WeatherBoard image={image}/>
                    <Board image={image}/>
                </div> }/>
                <Route exact path={'/news'} render={() =>
                    <div className={s.weatherNews}>
                        <WeatherBoard image={image}/>
                        <News/>
                    </div> }/>
            </Switch>
        </div>
    );
});

export default Routes;