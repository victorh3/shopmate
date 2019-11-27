import React, { useContext } from 'react';
import { Store } from '../../Store';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import Table, { Column } from 'react-virtualized/dist/commonjs/Table';
import Loader from 'react-loader';
import 'react-virtualized/styles.css';

const ItemTable = ({ items }) => {
  const { state } = useContext(Store);
  const { loaded } = state;

  const rowClassName = ({ index }) => {
    if (index < 0) {
      return 'TableRow--header';
    } else {
      return index % 2 === 0 ? 'TableRow--even' : 'TableRow--odd';
    }
  };

  const rowGetter = ({ index }) => items[index];

  return loaded ? (
    <AutoSizer>
      {({ width, height }) => (
        <Table
          className="ItemTable"
          width={width}
          height={height}
          headerHeight={50}
          rowClassName={rowClassName}
          rowHeight={50}
          rowCount={items.length}
          rowGetter={rowGetter}
        >
          <Column label="Brand" dataKey="brand_name" width={100} flexGrow={1} />
          <Column label="Name" dataKey="name" width={100} flexGrow={2} />
          <Column label="Size" dataKey="size" width={100} flexGrow={1} />
        </Table>
      )}
    </AutoSizer>
  ) : (
    <Loader />
  );
};

export default ItemTable;
