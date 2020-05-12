
import { fromJS, List } from 'immutable';
import { types } from './types';

const initialState = List();

export const postsReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case types.CLEAR_POSTS:
            return state.clear();

        case types.CREATE_POST:
            return state.unshift(fromJS(payload));

        case types.FILL_POSTS:
            return fromJS(payload);

        case types.LIKE_POST:
            return state.updateIn([
                state.findIndex(post => post.get('id') === payload.postId),
                'likes',
            ], likes => likes.unshift(payload.liker));

        case types.REMOVE_POST:
            return state.filter(post => post.get('id') !== payload);

        case types.UNLIKE_POST:
            return state.updateIn(
                [
                    state.findIndex(post => post.get('id') === payload.postId),
                    'likes',
                ],
                likes => likes.filter(
                    like => like.get('id') !== payload.liker.get('id')
                ),
            );

        default:
            return state;
    }
};
