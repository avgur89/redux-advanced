
import { replace } from 'react-router-redux';
import { apply, put } from 'redux-saga/effects';
import { notificationActions } from '../../../notification/actions';
import { uiActions } from '../../../ui/actions';
import { book } from '../../../../navigation/book';
import { api } from '../../../../REST';

export function* updatePassword ({
    payload: { newPassword, oldPassword },
}) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.profile.updateProfile, [{
            newPassword, oldPassword,
        }]);
        const { message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(notificationActions.showNotification('Password has been updated.'));
        yield put(replace(book.profile));
    } catch (error) {
        yield put(uiActions.emitError(error, 'updatePassword worker'));
        yield put(notificationActions.showNotification(
            'Bad password update.',
            'error',
            'updatePassword worker',
        ));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
