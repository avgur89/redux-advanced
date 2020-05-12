
import { combineForms } from 'react-redux-form';

export const formsReducer = combineForms({
    user: {
        profile: {
            avatar: [],
            firstName: '',
            lastName: '',
        },
    },
}, 'forms');
