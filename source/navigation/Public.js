// Core
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { book } from './book';

// Pages
import { Login, Signup } from '../pages';

export default class Public extends Component {
    render () {
        return (
            <Switch>
                <Route
                    component = { Login }
                    path = { book.login }
                />
                <Route
                    component = { Signup }
                    path = { book.signup }
                />
                <Redirect to = { book.login } />
            </Switch>
        );
    }
}
