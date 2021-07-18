import React from 'react';
import s from './board.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import {listOfCities} from "../../common/listOfcities";
import {setWeatherTC} from "../../../m2-bll/weatherReducer";
import {ListType} from "../weatherBorder/weatherBoard";
import Preloader from "../preloader/Preloader";
import loading from './../../common/loading1.gif'

export  type typeProps = {
    image: (part: number) => any
}

const Board = React.memo((props: typeProps) => {
    const weather = useSelector<AppRootStateType, any>(state => state.weather)
    let dispatch = useDispatch()

    let daysIndex = [8, 16, 24, 32]
    const findCity = (city: string) => {
        dispatch(setWeatherTC(city))
    }

    const findMin = (t: number) => {
        let arr = weather.weather.list.slice(t,t+8)
        let arrayMinTempForOneDay = arr.map ((el: ListType) => Math.floor(el.main.temp_min))
        return Math.min(...arrayMinTempForOneDay)
    }

    const findMax = (t: number) => {
        let arr = weather.weather.list.slice(t, t + 8)
        let arrayMinTempForOneDay = arr.map((el: ListType) => Math.floor(el.main.temp_min))
        return Math.max(...arrayMinTempForOneDay)
    }

    const image = props.image

    return (
        <div className={s.board}>
            <Preloader loading={loading}/>
            {weather.weather === null || weather.weather.message !== 0
                ? <div>{}</div>
                : <div className={s.daysBox}>
                    {daysIndex.map(n => {
                            return <div className={s.dayBox}>
                                <div>{weather.weather.list[n].dt_txt.substr(0, 10)}</div>
                                <img className={s.img} alt={''} src={image(n)}/>
                                <div className={s.minMax}>
                                    <div>
                                        <div>Min</div>
                                        <div className={s.minTemp}>{findMin(n)}
                                            <sup>o</sup>C
                                        </div>
                                    </div>
                                    <div>
                                        <div>Max</div>
                                        <div className={s.maxTemp}>{findMax(n)}
                                            <sup>o</sup>C
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    )}
                </div>}

            <div className={s.listOfCities}>
                {listOfCities.map(c => {
                    return <div onClick={() => findCity(c)} style={{cursor: 'pointer'}}>{c}</div>
                })}
            </div>
        </div>

    )
});

export default Board;