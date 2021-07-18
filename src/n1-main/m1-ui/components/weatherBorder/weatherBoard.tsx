import React, {useEffect} from "react";
import {setWeatherTC} from "../../../m2-bll/weatherReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import s from './weatherBoard.module.scss'
import backImage from '../../common/background3.gif'
import SearchBox from "./searchBox/searchBox";
import Preloader from "../preloader/Preloader";
import loading from './../../common/loading.gif'

export type ListType = {
    main: {
        temp_min: number
        temp_max: number
    }
}

export  type typeProps = {
    image: (part: number) => any
}

const WeatherBoard = React.memo((props: typeProps) => {
    const weather = useSelector<AppRootStateType, any>(state => state.weather)
    let dispatch = useDispatch()


    useEffect(() => {
        dispatch(setWeatherTC('Warsaw'))
    }, [dispatch])

    const image = props.image

    const reciveDate = (str: string) => {
        return str.substr(0, 10)
    }

    const findMin = () => {
        let arr = weather.weather.list.slice(0, 8)
        let arrayMinTempForOneDay = arr.map((el: ListType) => Math.floor(el.main.temp_min))
        return Math.min(...arrayMinTempForOneDay)
    }

    const findMax = () => {
        let arr = weather.weather.list.slice(0, 8)
        let arrayMinTempForOneDay = arr.map((el: ListType) => Math.floor(el.main.temp_min))
        return Math.max(...arrayMinTempForOneDay)
    }


    return (
        <div className={s.weatherBoard} style={{backgroundImage: `url(${backImage})`}}>
            <SearchBox/>
            <Preloader loading={loading}/>
            {weather.weather === null || weather.weather.message !== 0
                ? <div></div>
                : <div className={s.weatherData}>
                    <div>
                        <div className={s.cityBox}>
                            <h1>{weather.weather.city.name}</h1>
                            <div>{reciveDate(weather.weather.list[0].dt_txt)}</div>
                        </div>
                        <div className={s.weatherDescription}>
                            <img className={s.img} alt={''} src={image(0)}/>
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
                    </div>
                </div>}
        </div>
    )
})

export default WeatherBoard;