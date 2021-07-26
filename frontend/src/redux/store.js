import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import cartReducer from "./reducers/cartReducer"
import * as product from "./reducers/productReducers"

const rootReducer = combineReducers({
  shop: cartReducer,
  productList: product.productListReducer,
  productCategory: product.productCategoryReducer,
  productDetails: product.productDetailsReducer,
  productDelete: product.productDeleteReducer,
  productCreate: product.productCreateReducer,
  productUpdate: product.productUpdateReducer,
  productReviewCreate: product.productReviewCreateReducer,
  productTopRated: product.productTopRatedReducer
})

const middleware = [thunk]

const initialState = {}

const store = createStore(
  rootReducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
