import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import items_reducer from './items_reducer';

const rootReducer = combineReducers({
    items_state: items_reducer,
    routing
});

export default rootReducer;
