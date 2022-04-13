import React from 'react';
import uniqid from 'uniqid';
import { moreInfo } from './helpers/helpers';

const JustOne = ({ importData, search }) => {
  const justOne = moreInfo(importData)
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .map((results) => {
      let languageArr = [];
      for (const key in results.languages) {
        languageArr.push(<li key={uniqid()}>{results.languages[key]}</li>);
      }
      return (
        <div key={uniqid()}>
          <h1>{results.name}</h1>
          <p>
            Capital: <span>{results.capital}</span>
          </p>
          <p>
            Area: <span>{Math.ceil(results.area / 2.59)} square miles</span>
          </p>
          Languages: <ul>{languageArr}</ul>
          <img src={results.flag} alt="flag" />
        </div>
      );
    });

  return <div>{justOne}</div>;
};

export default JustOne;
