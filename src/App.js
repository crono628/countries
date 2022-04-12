import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      {
        <Search
          onSearchChange={onSearchChange}
          search={search}
          importData={countries}
        />
      }
    </div>
  );
};

export default App;
