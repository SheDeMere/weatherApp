import React, { useState } from "react";
import s from "./Weather.module.css";
import {
  getWeather,
  getWeatherGeoPosition,
} from "../../redux/actions/weatherAction";

import { useDispatch } from "react-redux";

const Form = () => {
  const [nameCity, setNameCity] = useState("");
  const dispatch = useDispatch();
  const searchCity = () => {
    setNameCity("");
    dispatch(getWeather(nameCity));
  };
  const hotKetEnter = (e) => {
    if (e.code === "Enter") {
      searchCity();
    }
  };
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
  );
};

export default Form;
