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

  useEffect(() => {
    itemService.getItems().then(data => {
      console.log(data.headers.link);
      setItems([...data.data]);
    });
  }, []);

  return (
    <div className="App">
      <Home>
        <ItemTable items={items} />
      </Home>
    </div>
  );
}

export default App;
