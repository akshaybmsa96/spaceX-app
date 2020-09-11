
/**
 * setting up store to change their state only once promises gets resolved
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
const INITIAL_DATA = { data : window.__initialData || [] };
const { createLogger } = require(`redux-logger`);

const middleware = [thunk];

const logger = createLogger({
    collapsed: true
});
middleware.push(logger);


const store = createStore(
    reducer,
    INITIAL_DATA,
    compose(
        applyMiddleware(...middleware)
    )
);

export default store;