import React, { useState } from "react";
import s from "./Weather.module.css";
import {
  changeTheme,
  getWeather,
  getWeatherGeoPosition,
} from "../../redux/actions/weatherAction";
import {useDispatch, useSelector} from "react-redux";
import DayIcon from "../../assets/DayIcon";
import NightIcon from "../../assets/NightIcon";

const Form = () => {
  const [nameCity, setNameCity] = useState("");
  const dispatch = useDispatch();
  const {nightMode} = useSelector((state) => state.weather)
  const searchCity = () => {
    setNameCity("");
    dispatch(getWeather(nameCity));
  };
  const hotKetEnter = (e) => {
    if (e.code === "Enter") {
      searchCity();
    }
  };

  const changeThemeClick = () => {
    dispatch(changeTheme(!nightMode))
  }
  const searchGeoPosition = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        dispatch(
          getWeatherGeoPosition(
            position.coords.latitude,
            position.coords.longitude
          )
        );
      });
    }
  };
  return (
    <div className={s.formSearchCity}>
      <div>
        <button className={s.geoPositionButton} onClick={searchGeoPosition}>
          📍
        </button>
        <input
            type="text"
            value={nameCity}
            placeholder="Название города"
            className={s.searchInput}
            onChange={(e) => setNameCity(e.target.value)}
            onKeyUp={(e) => hotKetEnter(e)}
        />
        <button className={s.searchButton} onClick={searchCity}>
          🔎
        </button>
      </div>
      <button className={s.buttonChangeTheme} onClick={changeThemeClick}>
        {nightMode
            ? <DayIcon />
            : <NightIcon />
        }
      </button>
      </div>
  );
};

export default Form;
