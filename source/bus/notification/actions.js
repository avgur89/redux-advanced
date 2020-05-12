
import { v4 } from 'uuid';
import { types } from './types';

export const notificationActions = {
    hideNotification: () => ({
        type: types.HIDE_NOTIFICATION,
    }),

    showNotification: (message, type = 'info', source) => ({
        payload: {
            id: v4(),
            message,
            source,
            type,
        },
        type: types.SHOW_NOTIFICATION,
    }),
};
