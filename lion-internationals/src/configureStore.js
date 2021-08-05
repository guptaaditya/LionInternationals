import { createStore } from 'redux';
import reducers from './reducers';

const configureStore = (preloadedState) => {
  return createStore(
    reducers,
    preloadedState
  );
};

export default configureStore;