import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import rootEpic from "./epics";

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(thunk, epicMiddleware));

const store = createStore(rootReducer, enhancers);

epicMiddleware.run(rootEpic);

export default store;
