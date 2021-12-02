import {API_URL} from "../../utils/settings";
import axios from "axios";


export const addProducts = (form) => {
  return async dispatch => {
    try {
      const response = await axios.post(`${API_URL}/products`, form);
      console.log(response)
    } catch (err) {
      console.log(err);
    }
  }
}