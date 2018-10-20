import {createStore} from 'redux';
import Reducer from './Reducer';

//创建一个全局的store
const store = createStore(Reducer)

export default store;