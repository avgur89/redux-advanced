
import { fromJS, List } from 'immutable';
import { types } from './types';

export const initialState = List();

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CLEAR_USERS:
            return state.clear();

        case types.FILL_USERS:
            return fromJS(action.payload);

        default:
            return state;
    }
};
