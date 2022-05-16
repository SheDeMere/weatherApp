import React, { memo } from 'react';
import s from './Weather.module.css'

const Weather = memo(({ name, icon, temp, tempMin, tempMax, description }) => {
    console.log(description)
    const temperature = JSON.stringify(temp).substr(0, 2)
    return (
        <div className={s.weather}>
            <h1 className={s.city}>{name}</h1>
                <img className={s.iconWeather} src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt=""/>
            <div className={s.desk}>
                <h1 className={s.temp}>{temperature} ℃</h1>
                <p className={s.deskWeather}>{description}</p>
            </div>
        </div>
    );
})

export default Weather;