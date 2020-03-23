import { useEffect, useContext } from 'react';
import { ItemService } from './ItemService';
import { Store } from '../Store';

const itemService = new ItemService();

export function useFetchItems() {
  const { dispatch } = useContext(Store);
  useEffect(() => {
    const fetchItems = async () => {
      const data = await itemService.getItems();
      return dispatch({
        type: 'SET_ITEMS',
        payload: data.data,
      });
    };

    fetchItems();
  }, [dispatch]);
}
