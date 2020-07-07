import React, { Component } from 'react';
import TopBar from '../components/TopBar'

export default class AppLayout extends Component {
    render() {
        return (
            <div>
                <TopBar />
                <main>
                    <div className='container-fluid'>
                        {this.props.children}
                    </div>
                </main>
            </div>
        )
    }
}
