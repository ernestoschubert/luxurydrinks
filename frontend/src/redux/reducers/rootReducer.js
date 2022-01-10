import { combineReducers } from 'redux';
import authReducers from './authReducers';
import productsReducer from './productsReducer';
const rootReducer = combineReducers({
    authReducers: authReducers,
    productsReducer
})

export default rootReducer;