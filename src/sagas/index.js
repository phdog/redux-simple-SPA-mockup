import { takeEvery } from 'redux-saga';
import * as action from '../constants/actions';
import getData from './get-data';

function* watchGetData() {
  yield* takeEvery(action.GET_DATA, getData);
}

export default function* rootSaga() {
  yield [
    watchGetData()
  ]
}
