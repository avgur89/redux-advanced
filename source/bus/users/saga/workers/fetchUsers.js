
import { apply, put } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';
import { usersActions } from '../../../users/actions';
import { api } from '../../../../REST';

export function* fetchUsers () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.users.fetch);
        const { data: users, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(usersActions.fillUsers(users));
    } catch (error) {
        yield put(uiActions.emitError(error, 'fetchUsers saga'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
