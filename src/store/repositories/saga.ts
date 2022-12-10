import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../services/api';
import { searchError, searchSuccess } from './actions';
import { RepositoriesTypes } from './types';

type SearchParams = {
  payload: {
    searchTerm: string;
    pageNumber: number;
  };
};

export function* search({ payload }: SearchParams): any {
  try {
    const response = yield call(
      api.get,
      `/search/repositories?q=${payload.searchTerm}`
    );

    yield put(searchSuccess(response.data.items));
  } catch (err) {
    yield put(searchError());
  }
}

export default all([takeLatest(RepositoriesTypes.SEARCH, search)]);
