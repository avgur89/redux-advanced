
import { types } from './types';
import { api } from '../../REST';

export const postActions = {
    clearPosts: () => ({ type: types.CLEAR_POSTS }),

    createPost: (post) => ({
        payload: post,
        type:    types.CREATE_POST,
    }),

    createPostAsync: (comment) => ({
        payload: comment,
        type:    types.CREATE_POST_ASYNC,
    }),

    fetchPostsAsync: () => ({
        type: types.FETCH_POSTS_ASYNC,
    }),

    fillPosts: (posts) => ({
        payload: posts,
        type:    types.FILL_POSTS,
    }),

    likePost: (likePostData) => ({
        payload: likePostData,
        type:    types.LIKE_POST,
    }),

    likePostAsync: (postId) => ({
        payload: postId,
        type:    types.LIKE_POST_ASYNC,
    }),

    removePost: (postId) => ({
        payload: postId,
        type:    types.REMOVE_POST,
    }),

    removePostAsync: (postId) => ({
        payload: postId,
        type:    types.REMOVE_POST_ASYNC,
    }),

    unlikePost: (likePostData) => ({
        payload: likePostData,
        type:    types.UNLIKE_POST,
    }),

    unlikePostAsync: (postId) => ({
        payload: postId,
        type:    types.UNLIKE_POST_ASYNC,
    }),

};
