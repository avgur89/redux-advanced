
import { actions } from 'react-redux-form';
import { apply } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { authenticate } from '../saga/workers';
import { authAction } from '../../auth/actions';
import { profileActions } from '../../profile/actions';
import { uiActions } from '../../ui/actions';
import { api } from '../../../REST';

describe('authenticate saga:', () => {
    test('should complete a 200 status scenario', async () => {
        await expectSaga(authenticate)
            .put(uiActions.startFetching())
            .provide([
                [
                    apply(api, api.auth.authenticate),
                    __.fetchResponseSuccess,
                ]
            ])
            .apply(localStorage, localStorage.setItem, [
                'token',
                __.token,
            ])
            .put(profileActions.fillProfile(__.userProfile))
            .put(actions.change(
                'forms.user.profile.firstName',
                __.userProfile.firstName,
            ))
            .put(actions.change(
                'forms.user.profile.lastName',
                __.userProfile.lastName,
            ))
            .put(authAction.authenticate())
            .put(uiActions.stopFetching())
            .put(authAction.initialize())
            .run();
    });

    test('should complete a 400 status scenario', async () => {
        await expectSaga(authenticate)
            .put(uiActions.startFetching())
            .provide([
                [
                    apply(api, api.auth.authenticate),
                    __.fetchResponseFail400,
                ]
            ])
            .put(uiActions.emitError(__.error, 'authenticate worker'))
            .put(uiActions.stopFetching())
            .put(authAction.initialize())
            .run();
    });

    test('should complete a 401 status scenario', async () => {
        await expectSaga(authenticate)
            .put(uiActions.startFetching())
            .provide([
                [
                    apply(api, api.auth.authenticate),
                    __.fetchResponseFail401,
                ]
            ])
            .apply(localStorage, localStorage.removeItem, ['remember'])
            .apply(localStorage, localStorage.removeItem, ['token'])
            .returns(null)
            .put(uiActions.stopFetching())
            .put(authAction.initialize())
            .run();
    });
});
