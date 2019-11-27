import React, { useContext } from 'react';
import { ItemService } from '../../service/ItemService';
import { Store } from '../../Store';

const itemService = new ItemService();

const TableTools = () => {
  const { state, dispatch } = useContext(Store);
  const { search } = state;

  const handleOnChange = ({ target }) => {
    return dispatch({
      type: 'SET_SEARCH',
      payload: target.value,
    });
  };

  const handleSearch = async () => {
    if (search !== '') {
      const res = await itemService.findItemByText(search);
      return dispatch({
        type: 'SET_ITEMS',
        payload: res.data,
      });
    } else {
      return dispatch({
        type: 'SET_PAGE',
        payload: 1,
      });
    }
  };

  return (
    <div className="TableTools">
      <input value={search} onChange={handleOnChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default TableTools;
