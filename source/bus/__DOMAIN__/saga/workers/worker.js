
import { apply, put } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';
import { api } from '../../../../REST';

export function* worker () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.fetch);
        const { data: posts, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
    } catch (error) {
        yield put(uiActions.emitError(error, 'worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
