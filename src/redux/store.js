import { createStore, compose } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools();

// initial state
const initValue = {
};

// enhancers or middleware
const enhancers = compose(
    //   applyMiddleware()
);

const store = createStore(
    rootReducer,
    composeEnhancers,
    //   initValue,
    //   enhancers
);

export default store;
