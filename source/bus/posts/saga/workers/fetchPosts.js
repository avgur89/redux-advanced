
import { apply, put } from 'redux-saga/effects';
import { postActions } from '../../actions';
import { uiActions } from '../../../ui/actions';
import { api } from '../../../../REST';

export function* fetchPosts () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.fetch);
        const result = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(result.message);
        }

        yield put(postActions.fillPosts(result.data));
    } catch (error) {
        yield put(uiActions.emitError(error, 'fetchPosts worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
