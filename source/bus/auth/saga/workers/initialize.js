
import { apply, put } from 'redux-saga/effects';
import { authAction } from '../../../auth/actions';

export function* initialize () {
    const remember = yield apply(localStorage, localStorage.getItem, ['remember']);
    const token = yield apply(localStorage, localStorage.getItem, ['token']);

    if (remember && token) {
        yield put(authAction.authenticateAsync());
    } else {
        yield put(authAction.initialize());
    }
}
