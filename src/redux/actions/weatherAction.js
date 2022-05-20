import axios from "axios";
const API = 'https://api.openweathermap.org/data/2.5/weather?';
const LANG = 'lang=ru';
const KEY_API = 'e9d5f1829c1200b9dac3d071281fdfdb';


export const getWeather = (city) => async dispatch => {
    try {
        dispatch({ type: 'GET_WEATHER_LOADING'})
        const response = await axios.get(`${API}q=${city}&${LANG}&appid=${KEY_API}&units=metric`)
        dispatch({
            type: 'GET_WEATHER_SUCCESS',
            payload: response.data
        })
    }catch (e) {
        dispatch({
            type: 'GET_WEATHER_ERROR'
        })
        console.log(e.message)
    }
}

export const getWeatherGeoPosition = (lat, lon) => async dispatch => {
    dispatch({ type: 'GET_WEATHER_LOADING'})
    try {
        const response = await axios.get(`${API}&lat=${lat}&lon=${lon}&${LANG}&appid=${KEY_API}&units=metric`)
        dispatch({
            type: 'GET_WEATHER_SUCCESS',
            payload: response.data
        })
    }catch (e) {
        dispatch({
            type: 'GET_WEATHER_ERROR',
            payload: e.message
        })
    }
}


export const changeTheme = (theme) => {
        return {
            type: 'CHANGE_THEME',
            payload: theme
        }
}