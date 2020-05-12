
import { actions } from 'react-redux-form';
import { replace } from 'react-router-redux';
import { apply, put } from 'redux-saga/effects';
import { authAction } from '../../../auth/actions';
import { postActions } from '../../../posts/actions';
import { profileActions } from '../../../profile/actions';
import { uiActions } from '../../../ui/actions';
import { usersActions } from '../../../users/actions';
import { book } from '../../../../navigation/book';
import { api } from '../../../../REST';

export function* logout () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.auth.logout);

        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);
            throw new Error(message);
        }
    } catch (error) {
        yield put(uiActions.emitError(error, 'logout worker'));
    } finally {
        yield apply(localStorage, localStorage.removeItem, ['remember']);
        yield apply(localStorage, localStorage.removeItem, ['token']);
        yield put(postActions.clearPosts());
        yield put(profileActions.clearProfile());
        yield put(actions.reset('forms.user'));
        yield put(uiActions.stopFetching());
        yield put(usersActions.clearUsers());
        yield put(authAction.logout());
        yield put(replace(book.login));
    }
}
