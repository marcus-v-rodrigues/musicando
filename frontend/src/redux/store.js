import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import cartReducer from "./reducers/cartReducer"

const rootReducer = combineReducers({
  shop: cartReducer,
})

const middleware = [thunk]

const store = createStore(rootReducer, composeWithDevTools(...middleware))

export default store
