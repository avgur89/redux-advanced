
import { usersActions } from '../actions';
import { types } from '../types';

describe('users actions:', () => {
    test('clearUsers', () => {
        expect(usersActions.clearUsers()).toEqual({
            type: types.CLEAR_USERS,
        });
    });

    test('fetchUsersAsync', () => {
        expect(usersActions.fetchUsersAsync()).toEqual({
            type: types.FETCH_USERS_ASYNC,
        });
    });

    test('fillUsers', () => {
        expect(usersActions.fillUsers(__.users)).toEqual({
            payload: __.users,
            type: types.FILL_USERS,
        });
    });
});
