import React, { useContext } from 'react';
import { Store } from '../../Store';

const TableRow = ({ item }) => {
  const { dispatch } = useContext(Store);

  const openModal = () => {
    return dispatch({
      type: 'SET_MODAL',
      payload: { showModal: true, modalData: { ...item } },
    });
  };

  return (
    <tr onClick={openModal}>
      <td>{item.brand_name}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.on_sale ? 'Yes' : 'No'}</td>
      <td>{item.notes}</td>
    </tr>
  );
};

export default TableRow;
