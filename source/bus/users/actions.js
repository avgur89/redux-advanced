
import { types } from './types';

export const usersActions = {
    clearUsers: () => {
        return {
            type: types.CLEAR_USERS,
        };
    },

    fetchUsersAsync: () => {
        return {
            type: types.FETCH_USERS_ASYNC,
        };
    },

    fillUsers: (users) => {
        return {
            payload: users,
            type: types.FILL_USERS,
        };
    },
};
