import { combineReducers } from 'redux';
import climate from './climate';
import playlist from './playlist';

const rootReducer = combineReducers({ climate, playlist });

export default rootReducer;
