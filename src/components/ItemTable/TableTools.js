import React, { useContext } from 'react';
import { Store } from '../../Store';
import Button from 'react-bootstrap/Button';

const TableTools = () => {
  const { dispatch } = useContext(Store);

  const handleAdd = () => {
    return dispatch({
      type: 'SET_MODAL',
      payload: { showModal: true, modalData: {} },
    });
  };

  return (
    <div className="TableTools">
      <Button onClick={handleAdd}>
        <i className="far fa-plus-square"></i>
      </Button>
    </div>
  );
};

export default TableTools;
