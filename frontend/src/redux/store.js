import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { cartReducer } from "./reducers/cartReducer"
import * as product from "./reducers/productReducers"
import * as user from "./reducers/userReducers"

const rootReducer = combineReducers({
  cart: cartReducer,
  productList: product.productListReducer,
  productCategory: product.productCategoryReducer,
  productDetails: product.productDetailsReducer,
  productDelete: product.productDeleteReducer,
  productCreate: product.productCreateReducer,
  productUpdate: product.productUpdateReducer,
  productReviewCreate: product.productReviewCreateReducer,
  productTopRated: product.productTopRatedReducer,
  userLogin: user.userLoginReducer,
  userRegister: user.userRegisterReducer,
  userDetails: user.userDetailsReducer,
  userUpdateProfile: user.userUpdateProfileReducer,
  userList: user.userListReducer,
  userDelete: user.userDeleteReducer,
  userUpdate: user.userUpdateReducer,
})

const middleware = [thunk]

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}

const store = createStore(
  rootReducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
