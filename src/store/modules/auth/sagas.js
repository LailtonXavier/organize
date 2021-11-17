import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import axios from '../../../services/axios';
import * as types from '../types';
import * as actions from './actions';

function* contactRequest({ payload }) {
  const { name, email, telephone, message } = payload;
  try {
    yield call(axios.post, '/contact', {
      name,
      email,
      telephone,
      message,
    });

    toast.success('E-mail sending with success');
    yield put(actions.contactSuccess({ name, email, telephone, message }));
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', '');

    if (status === 400) {
      toast.error('Bad Request');
      yield put(actions.contactFailure());
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('unknown errors');
    }
  }
}

export default all([takeLatest(types.CONTACT_REQUEST, contactRequest)]);
