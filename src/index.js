import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = document.getElementById('root');
const rootElement = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(rootElement, root);