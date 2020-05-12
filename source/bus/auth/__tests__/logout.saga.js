
import { actions } from 'react-redux-form';
import { replace } from 'react-router-redux';
import { apply, put } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { logout } from '../saga/workers';
import { authAction } from '../../auth/actions';
import { postActions } from '../../posts/actions';
import { profileActions } from '../../profile/actions';
import { uiActions } from '../../ui/actions';
import { usersActions } from '../../users/actions';
import { book } from '../../../navigation/book';
import { api } from '../../../REST';

describe('authenticate saga:', () => {
    test('200 scenario', async () => {
        await expectSaga(logout)
            .put(uiActions.startFetching())
            .provide([
                [
                    apply(api, api.auth.logout),
                    __.fetchResponseSuccess204,
                ],
            ])
            .apply(localStorage, localStorage.removeItem, ['remember'])
            .apply(localStorage, localStorage.removeItem, ['token'])
            .put(postActions.clearPosts())
            .put(profileActions.clearProfile())
            .put(actions.reset('forms.user'))
            .put(uiActions.stopFetching())
            .put(usersActions.clearUsers())
            .put(authAction.logout())
            .put(replace(book.login))
            .run();
    });

    test('204 scenario', async () => {
        await expectSaga(logout)
            .put(uiActions.startFetching())
            .provide([
                [
                    apply(api, api.auth.logout),
                    __.fetchResponseFail400,
                ]
            ])
            .put(uiActions.emitError(__.error, 'logout worker'))
            .apply(localStorage, localStorage.removeItem, ['remember'])
            .apply(localStorage, localStorage.removeItem, ['token'])
            .put(postActions.clearPosts())
            .put(profileActions.clearProfile())
            .put(actions.reset('forms.user'))
            .put(uiActions.stopFetching())
            .put(usersActions.clearUsers())
            .put(authAction.logout())
            .put(replace(book.login))
            .run();
    });
});
