import axios from 'axios';
import * as Constants from '../constants';

const URL =
  process.env.NODE_ENV === 'development'
    ? Constants.ITEM_API_URL_DEV
    : Constants.ITEM_API_URL;

export class ItemService {
  async getItems(page = 1) {
    const res = await axios.get(`${URL}`);
    return res;
  }

  async findItemByID(id) {
    const res = await axios.get(`${URL}/${id}`);
    return res;
  }

  // Currently out of date.
  async findItemByText(query) {
    const res = await axios.get(`${URL}?query=${query}`);
    return res;
  }

  async updateItemByID(id, payload) {
    const res = await axios.put(`${URL}/${id}/update`, payload);
    return res;
  }

  async deleteItemByID(id) {
    const res = await axios.delete(`${URL}/${id}/delete`);
    return res;
  }
}
