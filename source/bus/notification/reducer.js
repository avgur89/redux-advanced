
import { fromJS, Map } from 'immutable';
import { types } from './types';

const initialState = Map();

export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.HIDE_NOTIFICATION:
            return initialState;

        case types.SHOW_NOTIFICATION:
            return fromJS(action.payload);

        default:
            return state;
    }
};
