const defaultState = {
  category: [],
  mini_category: [],
}


const GET_CATEGORY = "GET_CATEGORY"
const GET_MINI_CATEGORY = "GET_MINI_CATEGORY"


export const categoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    case GET_MINI_CATEGORY:
      return {
        ...state,
        mini_category: action.payload
      }
    default:
      return state
  }
}

export const setCategory = (res) => ({type: GET_CATEGORY, payload: res})
export const setMiniCategory = (res) => ({type: GET_MINI_CATEGORY, payload: res})