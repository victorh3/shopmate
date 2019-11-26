import React, { useState, useEffect } from 'react';
import { ItemTable } from './components';
import { ItemService } from './service/ItemService';
import { Home } from './layout';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

const itemService = new ItemService();

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleSearch = () => {
    if (search !== '')
      itemService.findItemByText(search).then(data => {
        setItems([...data.data]);
      });
    else {
      itemService.getItems(page).then(data => {
        setItems([...data.data]);
      });
    }
  };

  useEffect(() => {
    itemService.getItems(page).then(data => {
      setItems([...data.data]);
    });
  }, [page]);

  return (
    <div className="App">
      <Home
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        nextPage={nextPage}
        page={page}
        prevPage={prevPage}
      >
        <ItemTable items={items} />
      </Home>
    </div>
  );
}

export default App;
