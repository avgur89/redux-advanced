
import { all, call, takeEvery } from 'redux-saga/effects';
import { types } from '../types';
import { authenticate, initialize, login, logout, signup } from './workers';

function* watchAuthenticate () {
    yield takeEvery(types.AUTHENTICATE_ASYNC, authenticate);
}

function* watchInitialize () {
    yield takeEvery(types.INITIALIZE_ASYNC, initialize);
}

function* watchLogin () {
    yield takeEvery(types.LOGIN, login);
}

function* watchLogout () {
    yield takeEvery(types.LOGOUT_ASYNC, logout);
}

function* watchSignup () {
    yield takeEvery(types.SIGNUP_ASYNC, signup);
}

export function* watchAuth () {
    yield all([
        call(watchAuthenticate),
        call(watchInitialize),
        call(watchLogin),
        call(watchLogout),
        call(watchSignup),
    ]);
}
