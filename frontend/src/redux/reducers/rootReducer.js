import { combineReducers } from 'redux';
import authReducers from './authReducers';

const rootReducer = combineReducers({
    authReducers: authReducers
})

export default rootReducer;