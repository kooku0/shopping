import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import appReducer from "../modules";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
  // run saga
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
