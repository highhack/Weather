import React, {ChangeEvent, useState} from 'react';
import s from './../weatherBoard.module.scss'
import {setSearchErrorAC, setTextHelperAC, setWeatherTC} from "../../../../m2-bll/weatherReducer";
import {Button, FormControl, FormHelperText, Input, InputLabel, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../m2-bll/store";


const SearchBox = () => {

    const searchError = useSelector<AppRootStateType, any>(state => state.weather.searchError)
    const textHelper = useSelector<AppRootStateType, any>(state => state.weather.textHelper)
    let dispatch = useDispatch()
    const [citySearch, setCitySearch] = useState('')

    const onHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCitySearch(event.currentTarget.value)
        dispatch(setSearchErrorAC(false))
        dispatch(setTextHelperAC(''))
    }

    const findWeather = () => {
        dispatch(setWeatherTC(citySearch))
        setCitySearch('')
    }

    const onKeyDown = (event: any) => {
        if (event.keyCode === 13) {
            dispatch(setWeatherTC(citySearch))
            setCitySearch('')
        }
    }


    return (
        <div className={s.searchContainer}>
            {/*<FormControl>*/}
            {/*    <InputLabel htmlFor="component-simple">City</InputLabel>*/}
            {/*    <Input*/}
            {/*        value={citySearch}*/}
            {/*        error={searchError}*/}
            {/*        onKeyDown={onKeyDown}*/}
            {/*        onChange={onHandler}*/}
            {/*    />*/}
            {/*    <FormHelperText style={{color:'red'}}>{textHelper}</FormHelperText>*/}
            {/*</FormControl>*/}
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
                <FormHelperText style={{color:'red'}}>{textHelper}</FormHelperText>
            </form>
            <div>
                <Button onClick={findWeather} size={'large'} variant="contained" >
                    Search
                </Button>
            </div>
        </div>

    )
};

export default SearchBox;