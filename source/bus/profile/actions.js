
import { types } from './types';

export const profileActions = {
    clearProfile: () => ({ type: types.CLEAR_PROFILE }),

    fillProfile: (profile) => ({
        payload: profile,
        type:    types.FILL_PROFILE,
    }),

    updateAvatar: (newAvatarUrl) => ({
        payload: newAvatarUrl,
        type:    types.UPDATE_AVATAR,
    }),

    updateAvatarAsync: (newAvatar) => ({
        payload: newAvatar,
        type:    types.UPDATE_AVATAR_ASYNC,
    }),

    updateNameAsync: (newName) => ({
        payload: newName,
        type:    types.UPDATE_NAME_ASYNC,
    }),

    updatePasswordAsync: payload => ({
        payload,
        type: types.UPDATE_PASSWORD_ASYNC,
    }),
};
