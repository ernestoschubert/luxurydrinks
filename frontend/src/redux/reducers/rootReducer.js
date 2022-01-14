import { combineReducers } from 'redux';
import authReducers from './authReducers';
import productsReducer from './productsReducer';
import coctelReducers from './coctelReducers';

const rootReducer = combineReducers({
    authReducers: authReducers,
    productsReducer: productsReducer,
    coctelReducers: coctelReducers,
})

export default rootReducer;