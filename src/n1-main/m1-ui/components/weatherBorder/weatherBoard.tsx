import React, {useEffect} from "react";
import {setWeatherTC} from "../../../m2-bll/weatherReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import s from './weatherBoard.module.scss'
import clouds from '../../common/icons/clouds.png'
import sun from '../../common/icons/clearSky.png'
import rain from '../../common/icons/rain.png'
import darkClouds from '../../common/icons/darkClouds.png'
import backImage from '../../common/background3.gif'
import SearchBox from "./searchBox/searchBox";

type ListType = {
    main:  {
    temp_min: number
    temp_max: number
}
}

const WeatherBoard = () => {
    const weather = useSelector<AppRootStateType, any>(state => state.weather)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(setWeatherTC('Kyiv'))
    }, [dispatch])


    const image = () => {
        if (weather.weather.list[0].weather[0].description === 'broken clouds'
            || weather.weather.list[0].weather[0].description === 'scattered clouds'
            || weather.weather.list[0].weather[0].description === 'few clouds')
            return clouds
        else if (weather.weather.list[0].weather[0].description === 'clear sky')
            return sun
        else if (weather.weather.list[0].weather[0].description === 'light rain')
            return rain
        else if (weather.weather.list[0].weather[0].description === 'overcast clouds')
            return darkClouds
    }

    const reciveDate = (str: string) => {
        return str.substr(0, 10)
    }

    const findMin = () => {
        let arr = weather.weather.list.slice(0,8)
        let arrayMinTempForOneDay = arr.map ((el: ListType) => Math.floor(el.main.temp_min))
        return Math.min(...arrayMinTempForOneDay)
    }

    const findMax = () => {
        let arr = weather.weather.list.slice(0,8)
        let arrayMinTempForOneDay = arr.map ((el: ListType) => Math.floor(el.main.temp_min))
        return Math.max(...arrayMinTempForOneDay)
    }

    return (
        <div className={s.weatherBoard} style={{backgroundImage: `url(${backImage})`}}>
            <SearchBox/>
            {weather.weather === null || weather.weather.message !== 0
                ? <div>{}</div>
                : <div className={s.weatherData}>
                    <div className={s.cityBox}>
                        <h1>{weather.weather.city.name}</h1>
                        <div>{reciveDate(weather.weather.list[0].dt_txt)}</div>
                    </div>
                    <div>
                        <img className={s.img} alt={''} src={image()}/>
                        <div>{weather.weather.list[0].weather[0].description}</div>
                    </div>
                    <div className={s.temp}>
                        <h1>{Math.floor(weather.weather.list[0].main.temp)} <sup>o</sup>C</h1>
                        <div className={s.minMax}>
                            <div>
                                <div>Min</div>
                                {/*<div className={s.minTemp}>{Math.floor(weather.weather.list[0].main.temp_min)}*/}
                                <div className={s.minTemp}>{findMin()}
                                    <sup>o</sup>C
                                </div>
                            </div>
                            <div>
                                <div>Max</div>
                                <div className={s.maxTemp}>{findMax()}
                                    <sup>o</sup>C
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default WeatherBoard;