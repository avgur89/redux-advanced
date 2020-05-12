
import { Map } from 'immutable';
import { authAction } from '../actions';
import { authReducer } from '../reducer';

const initialState = Map({
    isAuthenticated: false,
    isInitialized: false,
});

describe('auth reducer:', () => {
    test('should return initial state by default', () => {
        expect(authReducer(void 0, {})).toEqual(initialState);
    });

    test('should handle AUTHENTICATE action', () => {
        expect(authReducer(void 0, authAction.authenticate()))
            .toEqual(initialState.set('isAuthenticated', true));
    });

    test('should handle INITIALIZE action', () => {
        expect(authReducer(void 0, authAction.initialize()))
            .toEqual(initialState.set('isInitialized', true));
    });

    test('should handle LOGOUT action', () => {
        expect(authReducer(void 0, authAction.logout()))
            .toEqual(initialState.set('isAuthenticated', false));
    });
});
