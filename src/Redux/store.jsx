import { createStore, applyMiddleware, compose } from "redux";
import testMiddleWare from "./middleWare";

const initial = {
  value: 0,
};

function Counter(state = initial, action) {
  switch (action.type) {
    case "inc":
      return { value: state.value + 1 };
    case "dec":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  Counter,
  composeEnhansers(applyMiddleware(testMiddleWare))
);

export default store;
