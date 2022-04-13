import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [selectButton, setSelectButton] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setSelectButton(false);
    setShowAll(false);
  };

  const handleSearchClick = (e) => {
    setSearch(e.target.id);
    setSelectButton(true);
    setShowAll(false);
  };

  const handleShowClick = () => {
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
          searchClick={handleSearchClick}
          value={search}
          buttonSwitch={selectButton}
          onShowClick={handleShowClick}
          showSwitch={showAll}
        />
      }
    </div>
  );
};

export default App;
