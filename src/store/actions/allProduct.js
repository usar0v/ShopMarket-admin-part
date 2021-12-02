import {API_URL} from "../../utils/settings";
import {setProduct} from "../productReducer";
import axios from "axios";
import {setCategory, setMiniCategory} from "../categoryReducer";


export const getProducts = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      dispatch(setProduct(response.data));
    } catch (err) {
      console.log(err);
    }
  }
}

export const getCategory = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${API_URL}/categories`);
      dispatch(setCategory(response.data));
    } catch (err) {
      console.log(err);
    }

  }
}

export const getMiniCategory = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${API_URL}/mini_categories`);
      dispatch(setMiniCategory(response.data));
    } catch (err) {
      console.log(err);
    }
  }
}

export const deleteProduct = (id) => {
  return async dispatch => {
    try {
      await axios.delete(`${API_URL}/products/${id}`);
      dispatch(getProducts())
    } catch (err) {
      console.log(err);
    }
  }
}

export const updateProduct = (id) => {
  return async dispatch => {
    try {
      await axios.put(`${API_URL}/products/${id}`);
      dispatch(getProducts())
    } catch (err) {
      console.log(err);
    }
  }
}