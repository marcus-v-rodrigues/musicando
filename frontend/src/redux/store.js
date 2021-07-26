import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import cartReducer from "./reducers/cartReducer"
import productReducer from "./reducers/productReducers"

const rootReducer = combineReducers({
  shop: cartReducer,
  productList: productReducer
})

const middleware = [thunk]

const store = createStore(rootReducer, composeWithDevTools(...middleware))

export default store
