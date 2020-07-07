import React, { Component } from 'react';
import AppLayout from '../layouts/AppLayout';
import Todo from './Todo'

export default class App extends Component {
    render() {
        return (
            <AppLayout>
                <Todo />
            </AppLayout>
        )
    }
}
