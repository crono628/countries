import React from 'react';
import uniqid from 'uniqid';
import GetWeather from './GetWeather';
import { moreInfo } from './helpers/helpers';

const JustOne = ({ importData, search, weather }) => {
  const justOne = moreInfo(importData)
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .map((results) => {
      let languageArr = [];
      let currencyArr = [];
      for (const key in results.languages) {
        languageArr.push(<li key={uniqid()}>{results.languages[key]}</li>);
      }

      for (const key in results.currency) {
        currencyArr.push(<li key={uniqid()}>{results.currency[key].name}</li>);
      }

      return (
        <div key={uniqid()}>
          <h1>{results.name}</h1>
          <h3>Continent: {results.continent}</h3>
          <div>
            Capital: <span>{results.capital}</span>
            <GetWeather cityName={results.capital} />
          </div>
          <p>
            Area: <span>{Math.ceil(results.area / 2.59)} square miles</span>
          </p>
          <div>
            Currency: <ul>{currencyArr}</ul>
          </div>
          <div>
            Languages: <ul>{languageArr}</ul>
          </div>
          <img src={results.flag} alt="flag" />
        </div>
      );
    });

  return <div>{justOne}</div>;
};

export default JustOne;
