import axios from 'axios';
import * as Constants from '../constants';

export class ItemService {
  async getItems(page = 1) {
    const res = await axios.get(`${Constants.ITEM_API_URL}?page=${page}`);
    return res;
  }

  async findItemByID(id) {
    const res = await axios.get(`${Constants.ITEM_API_URL}/${id}`);
    return res;
  }

  async findItemByText(query) {
    const res = await axios.get(`${Constants.ITEM_API_URL}?query=${query}`);
    return res;
  }
}
