
import io from 'socket.io-client';
import { groupId, ROOT_URL } from '../REST';

export const socket = io(ROOT_URL, { path: '/redux/ws' });

export const joinSocketChannel = () => {
    const token = localStorage.getItem('token');

    socket.emit('join', { groupId, token });
};
