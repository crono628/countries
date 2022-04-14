import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Search from './components/Search';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [selectButton, setSelectButton] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // axios.get('https://restcountries.com/v3.1/all').then((response) => {
    //   setCountries(response.data);
    //   console.log(countries);
    // });
    const fetchData = async () => {
      try {
        const data = await fetch('https://restcountries.com/v3.1/all');
        const json = await data.json();
        setCountries(json);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setSelectButton(false);
    setShowAll(false);
  };

  const handleSpecificClick = (e) => {
    setSearch(e.target.id);
    setSelectButton(true);
    setShowAll(false);
  };

  const handleShowAllClick = () => {
    setSelectButton(false);
    setSearch('');
    setShowAll(!showAll);
  };

  return (
    <div>
      {
        <Search
          onSearchChange={handleSearchChange}
          search={search}
          importData={countries}
          searchClick={handleSpecificClick}
          value={search}
          buttonSwitch={selectButton}
          onShowClick={handleShowAllClick}
          showSwitch={showAll}
          boolSwitch={selectButton}
        />
      }
    </div>
  );
};

export default App;
