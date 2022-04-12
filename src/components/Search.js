import React from 'react';
import uniqid from 'uniqid';

const Search = ({ onSearchChange, importData, search }) => {
  const getName = (data) => {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      const name = data[i].name.common;
      arr.push(name);
    }
    return arr;
  };

  const moreInfo = (data) => {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      const name = data[i].name.common;
      const capital = data[i].capital;
      const area = data[i].area;
      const languages = data[i].languages;
      const flag = data[i].flags.png;
      arr.push({
        name: name,
        capital: capital,
        area: area,
        languages: languages,
        flag: flag,
      });
    }
    console.log(arr);

    return arr;
  };

  const countries = getName(importData)
    .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
    .map((results) => {
      return <div key={uniqid()}>{results}</div>;
    });

  const justOne = moreInfo(importData)
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .map((results) => {
      let languageArr = [];
      for (const key in results.languages) {
        languageArr.push(<li>{results.languages[key]}</li>);
      }
      return (
        <div key={uniqid()}>
          <h1>{results.name}</h1>
          <p>
            Capital: <div>{results.capital}</div>
          </p>
          <p>
            Area: <div>{results.area}</div>
          </p>
          Languages: <ul>{languageArr}</ul>
          <img src={results.flag} />
        </div>
      );
    });

  return (
    <div>
      <input onChange={onSearchChange} />
      <div>
        {search.length < 1
          ? 'Start typing to search for a country'
          : countries.length > 10
          ? 'Please narrow your search; over 10 matching results'
          : countries.length < 2
          ? justOne
          : countries}
      </div>
    </div>
  );
};

export default Search;
