import { createStore } from "redux";

import reduxer from './reduxer';

const extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reduxer, extension);

export default store;