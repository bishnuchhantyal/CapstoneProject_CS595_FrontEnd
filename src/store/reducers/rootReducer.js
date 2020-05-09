import productReducer from './productReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import userReducer from './userReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
     products: productReducer,
     cart: cartReducer,
     auth: authReducer,
     user: userReducer
});

export default rootReducer;