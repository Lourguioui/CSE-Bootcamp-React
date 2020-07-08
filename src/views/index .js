import React, { Component } from 'react';
import AppLayout from '../layouts/AppLayout';
import Todo from './Todo'

export default class AppContent extends Component {
    render() {
        return (
            <AppLayout>
                <Todo />
            </AppLayout>
        )
    }
}
