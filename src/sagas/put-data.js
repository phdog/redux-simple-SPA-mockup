import { select, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { selectList, selectData } from '../selectors';
import * as action from '../constants/actions';
import config from '../constants/config';

export default function* putData() {
  const API = process.env.API_URL || config.API_URL;
  const options = { headers: { 'Content-Type': 'application/json' } };

  try {
    const data = yield select(selectData)
    const list = yield select(selectList)
    const requestURL = `${API}/${list.entity}/${list.id}`;
    const response = yield call(axios.put, requestURL, data, options);
    console.log(response.data);
  } catch (e) {
    console.log(e.response.data.error);
  }
}
