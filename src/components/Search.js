import React from 'react';
import uniqid from 'uniqid';
import { getName } from './helpers/helpers';
import JustOne from './JustOne';

const Search = ({
  onSearchChange,
  searchClick,
  importData,
  search,
  buttonSwitch,
  showSwitch,
  onShowClick,
}) => {
  let newArr = [...importData];

  const filtered = newArr.map((item, index) => {
    let selection;
    if (newArr[index].name.common === search) {
      selection = (
        <JustOne key={uniqid()} importData={[item]} search={search} />
      );
    }
    return selection;
  });

  const allCountries = getName(importData)
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })
    .map((results) => {
      return (
        <div key={uniqid()}>
          <button
            className="country-btn"
            id={results.name}
            onClick={searchClick}
          >
            {results.name}
          </button>{' '}
        </div>
      );
    });

  return (
    <>
      <span>
        <input onChange={onSearchChange} value={search} />
        <button onClick={onShowClick}>Show All</button>
      </span>
      <div className="results">
        {showSwitch ? (
          allCountries
        ) : buttonSwitch ? (
          filtered
        ) : search.length < 1 ? (
          'Start typing to search for a country'
        ) : allCountries.length > 10 ? (
          'Please narrow your search; over 10 matching results'
        ) : allCountries.length < 2 ? (
          <JustOne importData={importData} search={search} />
        ) : (
          allCountries
        )}
      </div>
    </>
  );
};

export default Search;
