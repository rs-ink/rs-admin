import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from 'reducers';
import {createLogger} from 'redux-logger';
import {routerMiddleware} from "react-router-redux";

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState = {}, history) {
    const middlewares = [thunkMiddleware, routerMiddleware(history), loggerMiddleware]; // loggerMiddleware
    // noinspection JSCheckFunctionSignatures
    const middlewareEnhancer = composeWithDevTools(
        applyMiddleware(...middlewares)
    );
    const enhancers = [middlewareEnhancer];
    const composedEnhancers = compose(...enhancers);
    return createStore(rootReducer, preloadedState, composedEnhancers);
}
