import {createStore, combineReducers} from 'redux';
import cartReducer from '../reducers/reducers';

const rootReducer = combineReducers(
    {cartReducer}
    );

{/*const configureStore = () => {
    return createStore(rootReducer);
}*/}

export const store = createStore(rootReducer);