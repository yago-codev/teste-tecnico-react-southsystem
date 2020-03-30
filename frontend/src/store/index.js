import { createStore } from 'redux';

import reducer from './modules/dragons/reducer';

const store = createStore(reducer);

export default store;
