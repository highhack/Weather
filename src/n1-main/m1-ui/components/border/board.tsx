import React from 'react';
import s from './board.module.scss'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";

const Board = () => {
    const weather = useSelector<AppRootStateType, any>(state => state.weather)

let daysIndex = [8,16,24,32]
    return (
        <div className={s.board}>
            {weather.weather === null || weather.weather.message !== 0
                ? <div>{}</div>
                : <div className={s.daysBox}>
                    {daysIndex.map(n => {return <div className={s.dayBox}>
                        <div>{weather.weather.list[n].dt_txt.substr(0, 10)}</div>
                        <h1>{Math.floor(weather.weather.list[n].main.temp)}<sup>o</sup>C</h1>
                            <div className={s.minMax}>
                                <div>
                                    <div>Min</div>
                                    <div className={s.minTemp}>{Math.floor(weather.weather.list[n].main.temp_min)}
                                        <sup>o</sup>C
                                    </div>
                                </div>
                                <div>
                                    <div>Max</div>
                                    <div className={s.maxTemp}>{Math.floor(weather.weather.list[n].main.temp_max)}
                                        <sup>o</sup>C
                                    </div>
                                </div>
                            </div>
                    </div>}
                    )}

                </div>}
        </div>

    )
};

export default Board;