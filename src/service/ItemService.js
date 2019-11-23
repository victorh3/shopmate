import axios from 'axios';
import * as Constants from '../constants';

export class ItemService {
  getItems(page) {
    return axios.get(`${Constants.ITEM_API_URL}?page=${page}`).then(res => res);
  }

  findItemByID(id) {
    return axios.get(`${Constants.ITEM_API_URL}/${id}`).then(res => res);
  }

  findItemByText(query) {
    return axios
      .get(`${Constants.ITEM_API_URL}?query=${query}`)
      .then(res => res);
  }
}
