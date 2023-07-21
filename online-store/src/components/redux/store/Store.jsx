import {createStore} from 'redux';
import RootReducers from '../reducer/RootReducer';


const Store = createStore(RootReducers);

export default Store;