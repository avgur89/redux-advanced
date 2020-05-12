
import { authAction } from '../actions';
import { types } from '../types';

describe('auth actions:', () => {
    test('authenticate', () => {
        expect(authAction.authenticate()).toEqual({
            type: types.AUTHENTICATE,
        });
    });

    test('authenticateAsync', () => {
        expect(authAction.authenticateAsync()).toEqual({
            type: types.AUTHENTICATE_ASYNC,
        });
    });

    test('initialize', () => {
        expect(authAction.initialize()).toEqual({
            type: types.INITIALIZE,
        });
    });

    test('initializeAsync', () => {
        expect(authAction.initializeAsync()).toEqual({
            type: types.INITIALIZE_ASYNC,
        });
    });

    test('loginAsync', () => {
        expect(authAction.loginAsync(__.credentials)).toEqual({
            payload: __.credentials,
            type: types.LOGIN,
        });
    });

    test('logout', () => {
        expect(authAction.logout()).toEqual({
            type: types.LOGOUT,
        });
    });

    test('logoutAsync', () => {
        expect(authAction.logoutAsync()).toEqual({
            type: types.LOGOUT_ASYNC,
        });
    });

    test('signupAsync', () => {
        expect(authAction.signupAsync(__.userProfile)).toEqual({
            payload: __.userProfile,
            type: types.SIGNUP_ASYNC,
        });
    });
});
