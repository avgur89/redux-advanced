
import { Map } from 'immutable';
import { types } from './types';

const initialState = Map({
    avatar:    '',
    firstName: '',
    id:        '',
    lastName:  '',
    token:     '',
});

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CLEAR_PROFILE:
            return state.clear();

        case types.FILL_PROFILE:
            return state.merge(action.payload);

        case types.UPDATE_AVATAR:
            return state.set('avatar', action.payload);

        default:
            return state;
    }
};
