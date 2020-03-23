import React, { useContext } from 'react';
import { ItemTable, Modal } from './components';
import { Home } from './layout';
import { Store } from './Store';
import { useFetchItems } from './service/CustomHooks';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

function App() {
  const { state } = useContext(Store);
  const { items } = state;

  useFetchItems();

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
