import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
// import loading from './../../common/loading.gif'
import s from'./Preloader.module.scss'
import {LoadingStatusType} from "../../../m2-bll/weatherReducer";



const Preloader = React.memo( (props: {loading: any}) => {
    let loadingStatus = useSelector<AppRootStateType, LoadingStatusType>(state => state.weather.loadingStatus);
    return (
        loadingStatus === "loading"
            ? <div>
                <div className={s.window}><img alt={''} src={props.loading}/></div>
            </div>
            : <div>{}</div>
    );
});

export default Preloader;