import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

const GetWeather = ({ cityName }) => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);

  const api_key = process.env.REACT_APP_API_KEY;
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=imperial`;

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const data = await fetch(apiCall);
        const json = await data.json();
        console.log(json);

        const temperature = Math.round(json.main.temp);
        const icon = `http://openweathermap.org/img/wn/${json.weather[0].icon}.png`;
        const description = json.weather[0].description;
        setWeather([
          {
            temperature: temperature,
            icon: icon,
            description: description,
          },
        ]);
      } catch (error) {
        console.log(error);
        console.log(weather);
      }
      setLoading(false);
    };
    fetchWeather();
  }, []);

  const renderWeather = weather.map((item) => {
    return (
      <div key={uniqid()} className="weather-div">
        <div className="weather-temp">
          {item.temperature}° and {item.description}
        </div>
        <img className="weather-icon" src={item.icon} alt="weather" />
      </div>
    );
  });
  return <div>{loading ? null : renderWeather}</div>;
};

export default GetWeather;
