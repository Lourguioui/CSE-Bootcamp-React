import React, { Component } from 'react';
import {
    Row,
    Col
} from 'reactstrap';

import '../assets/topbar.css';
import 'bootstrap/dist/css/bootstrap.css';

const TopBar = ({}) =>{
    return(
        <div className='top-bar fixed-top'>
            <div className='d-flex justify-content-center align-items-center'>
                CSE TODO app
            </div>
        </div>
    )
}

export default TopBar;

// export default class TopNav extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }
