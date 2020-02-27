import React, { useContext } from 'react';
import { Store } from '../../Store';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import Table, { Column } from 'react-virtualized/dist/commonjs/Table';
import Loader from 'react-loader';
import 'react-virtualized/styles.css';

const ItemTable = ({ items }) => {
  const { state, dispatch } = useContext(Store);
  const { loaded } = state;

  const rowClassName = ({ index }) => {
    if (index < 0) {
      return 'TableRow--header';
    } else {
      return index % 2 === 0 ? 'TableRow--even' : 'TableRow--odd';
    }
  };

  const rowGetter = ({ index }) => items[index];

  const open = ({ rowData }) => {
    return dispatch({
      type: 'SET_MODAL',
      payload: { showModal: true, modalData: { ...rowData } },
    });
  };

  return loaded ? (
    <AutoSizer>
      {({ width, height }) => (
        <Table
          className="ItemTable"
          headerHeight={50}
          height={height}
          onRowClick={open}
          rowClassName={rowClassName}
          rowCount={items.length}
          rowGetter={rowGetter}
          rowHeight={50}
          width={width}
        >
          <Column label="Brand" dataKey="brand_name" width={100} flexGrow={1} />
          <Column label="Name" dataKey="name" width={100} flexGrow={1} />
          <Column label="Price" dataKey="price" width={100} flexGrow={1} />
          <Column label="On Sale" dataKey="on_sale" width={100} flexGrow={0} />
          <Column label="Notes" dataKey="notes" width={100} flexGrow={2} />
        </Table>
      )}
    </AutoSizer>
  ) : (
    <Loader />
  );
};

export default ItemTable;
