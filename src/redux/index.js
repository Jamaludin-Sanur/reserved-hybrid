import { applyMiddleware, compose, combineReducers } from "redux";
import ReduxStore from "./Store";
import { createLogger } from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import persistState from 'redux-localstorage';
import UserRedux from "./user";
import NewsRedux from "./news";
import AuthRedux from "./auth";

let STORE = null;

// Setup Middleware
const loggerMiddleware = createLogger({ collapsed: true });
const sagaMiddleware = createSagaMiddleware();
const bundleMiddleware = compose(
    persistState(['AuthStore']),
    applyMiddleware(sagaMiddleware, loggerMiddleware)
);

// Setup Reducer
const bundleReducer = combineReducers({
    UserStore: UserRedux.reducer,
    NewsStore: NewsRedux.reducer,
    AuthStore: AuthRedux.reducer,
})

// Setup Store
STORE = ReduxStore.createStore(bundleReducer, bundleMiddleware);;

// Setup Saga (need to run after createStore)
sagaMiddleware.run(function* rootSaga() {
    yield all([
        UserRedux.saga(),
        NewsRedux.saga(),
        AuthRedux.saga(),
    ])
})

export default STORE;
