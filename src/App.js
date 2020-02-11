import React, { useEffect, useContext } from 'react';
import { ItemTable, Modal } from './components';
import { ItemService } from './service/ItemService';
import { Home } from './layout';
import { Store } from './Store';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

const itemService = new ItemService();

function App() {
  const { state, dispatch } = useContext(Store);
  const { items, page } = state;

  useEffect(() => {
    const fetchItems = async page => {
      const data = await itemService.getItems(page);
      return dispatch({
        type: 'SET_ITEMS',
        payload: data.data,
      });
    };

    fetchItems(page);
  }, [dispatch, page]);

  return (
    <div className="App">
      <Home>
        <ItemTable items={items} />
        <Modal />
      </Home>
    </div>
  );
}

export default App;
