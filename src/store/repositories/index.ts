import { Reducer } from 'redux';
import { RepositoriesState, RepositoriesTypes } from './types';

const INITIAL_STATE: RepositoriesState = {
  data: [],
  error: false,
  load: false,
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.SEARCH_SUCESS:
      return {
        ...state,
        load: false,
        error: false,
        data: action.payload.data,
      };

    case RepositoriesTypes.SEARCH_ERROR: {
      return {
        ...state,
        load: false,
        error: true,
        data: [],
      };
    }

    default:
      return state;
  }
};

export default reducer;
