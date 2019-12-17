import { put } from 'redux-saga/effects';
import { openMessageBar } from '../containers/App/actions';

export function* handleError(resp, lang = 'en') {
  if (resp.statusCode === 200) {
    if (resp.message) {
      yield put(
        openMessageBar({
          type: 'success',
          message: resp.message,
        }),
      );
    }
    return false;
  }

  if (resp.error && resp.error.statusCode === 401) {
    const messageDefault =
      lang === 'en'
        ? 'Your session has expired. Please login again.'
        : 'Su sesión ha vencido. Por favor inicie de nuevo.';
    // yield put(clearData());
    yield put(
      openMessageBar({
        type: 'warning',
        message: resp.error.message ? resp.error.message : messageDefault,
      }),
    );
    return true;
  }
  yield put(
    openMessageBar({
      type: 'error',
      message: (resp.error && resp.error.message) || resp.message,
    }),
  );
  return true;
}
