
import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';
import { authReducer as auth } from '../bus/auth/reducer';
import { formsReducer as forms } from '../bus/forms/reducer';
import { notificationReducer as notification } from '../bus/notification/reducer';
import { postsReducer as posts } from '../bus/posts/reducer';
import { profileReducer as profile } from '../bus/profile/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';
import { usersReducer as users } from '../bus/users/reducer';

export const rootReducer = combineReducers({
    auth,
    forms,
    notification,
    posts,
    profile,
    router,
    ui,
    users,
});
