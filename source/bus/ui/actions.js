
import { types } from './types';

export const uiActions = {
    emitError: (error, meta = null) => ({
        error: true,
        meta,
        payload: error,
        type:    types.EMIT_ERROR,
    }),

    setOfflineState: () => ({ type: types.SET_OFFLINE_STATE }),
    setOnlineState: () => ({ type: types.SET_ONLINE_STATE }),

    startFetching: () => {
        return {
            type: types.START_FETCHING,
        };
    },
    stopFetching: () => {
        return {
            type: types.STOP_FETCHING,
        };
    },
};
