
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { rootReducer } from './rootReducer';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;
const logger = createLogger({
    collapsed: true,
    colors:    {
        action:    () => '#149945',
        error:     () => '#ff0005',
        nextState: () => '#a47104',
        prevState: () => '#1c5faf',
        title:     () => '#139BFE',
    },
    duration: true,
});
const enhancedStore = composeEnhancers(applyMiddleware(logger));
const preloadedState = JSON.parse(localStorage.getItem('gallery'));

export const store = preloadedState
    ? createStore(
        rootReducer,
        preloadedState,
        enhancedStore
    )
    : createStore(
        rootReducer,
        enhancedStore
    );

store.subscribe(() => {
    const state = store.getState();

    localStorage.setItem('gallery', JSON.stringify(state));
});
