import React, { useContext } from 'react';
import { Store } from '../../Store';
import Table from 'react-bootstrap/Table';
import Loader from 'react-loader';
import TableRow from './TableRow';

const ItemTable = ({ items }) => {
  const { state } = useContext(Store);
  const { loaded } = state;

  return loaded ? (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Name</th>
          <th>Price</th>
          <th>On Sale?</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TableRow key={item._id} item={item} />
        ))}
      </tbody>
    </Table>
  ) : (
    <Loader />
  );
};

export default ItemTable;
