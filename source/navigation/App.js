// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Private from './Private';
import Public from './Public';
import { authAction } from '../bus/auth/actions';
import { socketActions } from '../bus/socket/actions';
import { Loading } from '../components';
import { joinSocketChannel, socket } from '../init/socket';

const mapDispatchToProps = {
    initializeAsync: authAction.initializeAsync,
    ...socketActions,
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.get('isAuthenticated'),
    isInitialized: state.auth.get('isInitialized'),
});

@hot(module)
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
    componentDidMount () {
        const { initializeAsync, listenConnection } = this.props;

        initializeAsync();
        joinSocketChannel();
        listenConnection();
    }

    componentWillUnmount () {
        socket.removeListener('connect');
        socket.removeListener('disconnect');
    }

    render () {
        const { isAuthenticated, isInitialized, listenPosts } = this.props;

        if (!isInitialized) {
            return <Loading />;
        }

        return isAuthenticated
            ? <Private listenPosts = { listenPosts } />
            : <Public />;
    }
}
