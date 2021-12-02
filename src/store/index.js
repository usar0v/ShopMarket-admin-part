import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {productReducer} from "./productReducer";
import {categoryReducer} from "./categoryReducer";

const rootReducer = combineReducers({
  productReducer,
  categoryReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))