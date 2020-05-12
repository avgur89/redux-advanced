
import { postActions } from '../posts/actions';
import { uiActions } from '../ui/actions';
import { socket } from '../../init/socket';

export const socketActions = {
    listenConnection: () => (dispatch) => {
        socket.on('connect', () => {
            dispatch(uiActions.setOnlineState());
        });

        socket.on('disconnect', () => {
            dispatch(uiActions.setOfflineState());
        });
    },

    listenPosts: () => (dispatch, getState) => {
        socket.on('create', (event) => {
            const { data: post } = JSON.parse(event);

            dispatch(postActions.createPost(post));
        });

        socket.on('like', (event) => {
            const { data, meta } = JSON.parse(event);

            if (meta.action === 'like') {
                const liker = getState.users
                    .find(user => user.get('id') === data.userId)
                    .delete('avatar');

                dispatch(postActions.likePost({
                    liker,
                    postId: data.postId,
                }));
            } else {
                dispatch(postActions.unlikePost(data));
            }
        });

        socket.on('remove', (event) => {
            const { data: postId } = JSON.parse(event);

            dispatch(postActions.removePost(postId));
        });
    },
};
