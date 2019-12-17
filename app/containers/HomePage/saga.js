import { all, call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { setProjects } from './actions';
import { GET_PROJECTS } from './constants';
// import { handleError } from '../../utils/utils';

export function* getProjects(action) {
  const { data } = action;

  const headers = {
    method: 'GET',
    // token: data.token,
    lang: data.lang,
  };

  const requestUrl = '/projects';
  try {
    // yield put(showSpinner());
    const resp = yield call(request, requestUrl, headers);

    // yield put(hideSpinner());

    // if (yield handleError(resp, data.lang)) return;
    yield put(setProjects(resp.response));
  } catch (err) {
    // yield put(hideSpinner());
    // yield handleUnexpectedError(err);
  }
}

// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  yield all([takeLatest(GET_PROJECTS, getProjects)]);
}
