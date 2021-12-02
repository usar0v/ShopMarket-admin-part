const defaultState = {
  products: [],
  category: [],
}

const GET_PRODUCTS = "GET_PRODUCTS"
const GET_CATEGORY = "GET_CATEGORY"

export const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    default:
      return state
  }
}

export const setProduct = (res) => ({type: GET_PRODUCTS, payload: res})
export const setCategory = (res) => ({type: GET_CATEGORY, payload: res})