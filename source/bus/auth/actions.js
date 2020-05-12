
import { types } from './types';

export const authAction = {
    authenticate: () => ({ type: types.AUTHENTICATE }),
    authenticateAsync: () => ({ type: types.AUTHENTICATE_ASYNC }),
    initialize: () => ({ type: types.INITIALIZE }),
    initializeAsync: () => ({ type: types.INITIALIZE_ASYNC }),
    loginAsync: (credentials) => ({
        payload: credentials,
        type: types.LOGIN,
    }),
    logout: () => ({ type: types.LOGOUT }),
    logoutAsync: () => ({ type: types.LOGOUT_ASYNC }),
    signupAsync: (userData) => ({
        payload: userData,
        type:    types.SIGNUP_ASYNC,
    }),
};
