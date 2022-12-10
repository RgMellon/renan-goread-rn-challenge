import { combineReducers } from 'redux';
import { createStore } from 'redux';

import repositories from './repositories';

export default combineReducers({
  repositories,
});
