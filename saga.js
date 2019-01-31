import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from './api'

const api = new Api({});

// worker Saga: will be fired on LOAD_DATA actions
function* fetchUser(action) {
  try {
    const user = yield call(api.fetchUser, action.payload);
    yield put({ type: "LOAD_DATA_SUCCESS", user: user });
  } catch (e) {
    yield put({ type: "FAILURE", message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
const mySaga = function* () {
  yield takeEvery("LOAD_DATA", fetchUser);
};
//
// /*
//   Alternatively you may use takeLatest.
//
//   Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
//   dispatched while a fetch is already pending, that pending fetch is cancelled
//   and only the latest one will be run.
// */
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default mySaga;
