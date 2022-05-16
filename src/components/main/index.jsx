import s from "./Weather.module.css";
import { useSelector } from "react-redux";
import Weather from "./Weather";
import Form from "./Form";
import { ScaleLoader } from "react-spinners";
const Index = () => {
  const { weather, loading, error } = useSelector((state) => state.weather);
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  return (
    <div className={s.weatherMain}>
      <Form />
      {weather !== null ? (
        <div>
          {loading ? (
            <ScaleLoader color={"white"} css={override} size={150} />
          ) : (
            weather &&
            weather.weather?.map((item) => {
              return (
                <Weather
                  temp={weather.main.temp}
                  tempMin={weather.main.temp_min}
                  tempMax={weather.main.temp_max}
                  name={weather.name}
                  icon={item.icon}
                  key={item.id}
                  description={item.description}
                  error={error}
                />
              );
            })
          )}
        </div>
      ) : (
        <div>
          {error ? (
            <h2>Не найдено</h2>
          ) : (
            <h1 className={s.startText}>
              Чтобы пользоваться приложением, введите название города или
              включите автоопределение.
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Index;
