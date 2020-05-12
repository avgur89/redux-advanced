
import { routerReducer as router } from 'react-router-redux';
import { combineReducers, createStore } from 'redux';
import { store } from '../store';
import { authReducer as auth } from '../../bus/auth/reducer';
import { formsReducer as forms } from '../../bus/forms/reducer';
import { postsReducer as posts } from '../../bus/posts/reducer';
import { profileReducer as profile } from '../../bus/profile/reducer';
import { uiReducer as ui } from '../../bus/ui/reducer';
import { usersReducer as users } from '../../bus/users/reducer';

const referenceRootReducer = combineReducers({
    auth,
    forms,
    posts,
    profile,
    router,
    ui,
    users,
});

const referenceStore = createStore(referenceRootReducer);

describe('store:', () => {
    test('should have valid state shape', () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    });
});
