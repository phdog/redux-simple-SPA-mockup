import { takeEvery } from 'redux-saga';
import * as action from '../constants/actions';
import getData from './get-data';
import putData from './put-data';

function* watchGetData() {
  yield* takeEvery(action.GET_DATA, getData);
}
function* watchPutData() {
  yield* takeEvery(action.PUT_EDIT, putData);
}

export default function* rootSaga() {
  yield [
    watchGetData(),
    watchPutData()
  ]
}
