
import { all, call, takeEvery } from 'redux-saga/effects';
import { types } from '../types';
import { createPost, fetchPosts, likePost, removePost, unlikePost } from './workers';

function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

function* watchFetchPosts () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPosts);
}

function* watchLikePosts () {
    yield takeEvery(types.LIKE_POST_ASYNC, likePost);
}

function* watchRemovePost () {
    yield takeEvery(types.REMOVE_POST_ASYNC, removePost);
}

function* watchUnlikePosts () {
    yield takeEvery(types.UNLIKE_POST_ASYNC, unlikePost);
}

export function* watchPosts () {
    yield all([
        call(watchCreatePost),
        call(watchFetchPosts),
        call(watchLikePosts),
        call(watchRemovePost),
        call(watchUnlikePosts),
    ]);
}
