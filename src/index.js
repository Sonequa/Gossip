import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import rootReducer from './store/index';
import { createStore } from 'redux';
import RouterConfig from './router/index';

let store = createStore(rootReducer);
console.log(`BaseParams: ${{ ...store }}`);

ReactDOM.render(
    <Provider store={store}>
        <RouterConfig />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
