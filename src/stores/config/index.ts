import { createStore } from 'redux';
import appReducer from '~/stores/modules';

const configureStore = () => {
  const store = createStore(appReducer);

  return store;
};

export default configureStore;
