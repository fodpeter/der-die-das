import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { ajax } from "rxjs/observable/dom/ajax";
import reducers from "./reducers";
import thunk from "redux-thunk";
import epics from "./epics";

const epicMiddleware = createEpicMiddleware(epics, {
  dependencies: { getJSON: ajax.getJSON }
});

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__
  ? compose(
      applyMiddleware(thunk, epicMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  : applyMiddleware(thunk, epicMiddleware);

const store = createStore(reducers, enhancers);

export default store;
