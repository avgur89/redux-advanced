
import { all, call, takeEvery } from 'redux-saga/effects';
import { types } from '../types';
import { fetchUsers } from './workers';

function* watcFetchUsers () {
    yield takeEvery(types.FETCH_USERS_ASYNC, fetchUsers);
}

export function* watchUsers () {
    yield all([
        call(watcFetchUsers),
    ]);
}
