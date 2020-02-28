import React, { useContext } from 'react';
// import { ItemService } from '../../service/ItemService';
import { Store } from '../../Store';

// const itemService = new ItemService();

const TableTools = () => {
  const { dispatch } = useContext(Store);
  // const { search } = state;

  // const handleOnChange = ({ target }) => {
  //   return dispatch({
  //     type: 'SET_SEARCH',
  //     payload: target.value,
  //   });
  // };

  // const handleSearch = async () => {
  //   dispatch({
  //     type: 'SET_LOADED',
  //     payload: false,
  //   });
  //   if (search !== '') {
  //     const res = await itemService.findItemByText(search);
  //     return dispatch({
  //       type: 'SET_ITEMS',
  //       payload: res.data,
  //     });
  //   } else {
  //     return dispatch({
  //       type: 'SET_PAGE',
  //       payload: 1,
  //     });
  //   }
  // };

  const handleAdd = () => {
    return dispatch({
      type: 'SET_MODAL',
      payload: { showModal: true, modalData: {} },
    });
  };

  return (
    <div className="TableTools">
      {/* <input value={search} onChange={handleOnChange} />
      <button onClick={handleSearch} disabled={!search.trim()}>
        Search
      </button> */}
      <button onClick={handleAdd}>
        <i className="far fa-plus-square"></i>
      </button>
    </div>
  );
};

export default TableTools;
