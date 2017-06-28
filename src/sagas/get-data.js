import { call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import { departmentListSchema, employeeListSchema } from '../constants/model';
import axios from 'axios';
import * as action from '../constants/actions';
import config from '../constants/config';

export default function* getData() {
  const API = process.env.API_URL || config.API_URL;
  const requestURL = `${API}/db`;
  const options = { headers: { 'Content-Type': 'application/json' } };

  try {
    yield put({type: action.REQ_PENDING});
    const response = yield call(axios.get, requestURL, options);
    const department = normalize(response.data.department, departmentListSchema);
    const employee = normalize(response.data.employee, employeeListSchema);
    yield put({ type: action.PUSH_DATA, payload: { department, employee } });
  } catch (e) {
    console.log(e.response.data.error);
  } finally {
    yield put({type: action.RES_RECEIVED});
  }
}
