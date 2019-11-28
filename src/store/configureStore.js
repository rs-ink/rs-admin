import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from 'reducers';
// import { createLogger } from 'redux-logger';

// const loggerMiddleware = createLogger();

export default function configureStore(preloadedState = {}) {
  const middlewares = [thunkMiddleware]; // loggerMiddleware
  // noinspection JSCheckFunctionSignatures
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);
  return createStore(rootReducer, preloadedState, composedEnhancers);
}
