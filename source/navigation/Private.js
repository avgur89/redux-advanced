// Core
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { book } from './book';
import { socket } from '../init/socket';

// Pages
import { Feed, NewPassword, Profile } from '../pages';

export default class Private extends Component {
    componentDidMount () {
        const { listenPosts } = this.props;

        listenPosts();
    }

    componentWillUnmount () {
        socket.removeListener('create');
    }

    render () {
        return (
            <Switch>
                <Route
                    component = { Feed }
                    path = { book.feed }
                />
                <Route
                    component = { NewPassword }
                    path = { book.newPassword }
                />
                <Route
                    component = { Profile }
                    path = { book.profile }
                />
                <Redirect to = { book.feed } />
            </Switch>
        );
    }
}
