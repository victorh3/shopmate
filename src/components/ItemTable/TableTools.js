import React from 'react';

const TableTools = ({ handleSearch, search, setSearch }) => {
  const handleOnChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div className="TableTools">
      <input value={search} onChange={handleOnChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default TableTools;
