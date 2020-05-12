
import { fromJS } from 'immutable';
import { usersActions } from '../actions';
import { initialState, usersReducer } from '../reducer';

describe('usersReducer:', () => {
    test('defaults to initial state', () => {
        const res = usersReducer(void 0, {});
        expect(res).toEqual(initialState);
    });

    test('handles CLEAR_USERS action', () => {
        const res = usersReducer(void 0, usersActions.clearUsers());
        expect(res).toEqual(initialState.clear());
    });

    test('handles FILL_USERS action', () => {
        const res = usersReducer(void 0, usersActions.fillUsers(__.users));
        expect(res).toEqual(fromJS(__.users));
    });
});
