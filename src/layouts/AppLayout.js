import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import 'bootstrap/dist/css/bootstrap.css';

export default class AppLayout extends Component {
    render() {
        return (
            <div className='p-0'>
                <TopBar />
                <main className='pt-4'>
                    <div className='container-fluid'>
                        {this.props.children}
                    </div>
                </main>
            </div>
        )
    }
}
