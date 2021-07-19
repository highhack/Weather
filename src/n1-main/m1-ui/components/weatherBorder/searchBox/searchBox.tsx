import React, {ChangeEvent, KeyboardEvent,  useState} from 'react';
import s from './../weatherBoard.module.scss'
import {setSearchErrorAC, setTextHelperAC, setWeatherTC} from "../../../../m2-bll/weatherReducer";
import {Button,FormHelperText, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../m2-bll/store";


const SearchBox = React.memo(() => {

    const searchError = useSelector<AppRootStateType, boolean>(state => state.weather.searchError)
    const textHelper = useSelector<AppRootStateType, string>(state => state.weather.textHelper)
    let dispatch = useDispatch()
    const [citySearch, setCitySearch] = useState('')

    const onHandler = (event: ChangeEvent<HTMLInputElement>) => {
        debugger
        setCitySearch(event.currentTarget.value)
        dispatch(setSearchErrorAC(false))
        dispatch(setTextHelperAC(''))
    }

    const findWeather = () => {
        dispatch(setWeatherTC(citySearch))
        setCitySearch('')
    }

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            dispatch(setWeatherTC(citySearch))
            setCitySearch('')
        }
    }


    return (
        <div className={s.searchContainer}>
            <form noValidate autoComplete="off">
                <TextField
                    id="outlined-secondary"
                    label="City"
                    variant="outlined"
                    color="secondary"
                    value={citySearch}
                    error={searchError}
                    onKeyDown={onKeyDown}
                    onChange={onHandler}
                />
                <FormHelperText style={{color:'red', fontFamily: `'Merienda', cursive`}}>{textHelper}</FormHelperText>
            </form>
                <Button
                    style={{fontFamily: `'Merienda', cursive`}}
                    onClick={findWeather}
                    className={s.button}
                    size={'large'}
                    variant="contained" >
                    Search
                </Button>
        </div>

    )
});

export default SearchBox;