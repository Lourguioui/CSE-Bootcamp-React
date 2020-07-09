import React, { Component } from 'react';
import {
    Row,
    Col,
    Badge
} from 'reactstrap';
import '../assets/todo-item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faArrowRight, faFlag } from "@fortawesome/free-solid-svg-icons";

export default class TodoItem extends Component {
    render() {
        return (
            <Row className="todo-item-row" >
                <Col lg="4" className="d-flex align-items-center h-100 row-cel pl-4">
                    <div>Task 1</div>
                </Col>
                <Col lg="4" className="d-flex align-items-center h-100 row-cel">
                    <div>Date</div>
                </Col>
                <Col className="d-flex align-items-center h-100">
                    <Badge color="primary" pill>Normal</Badge>
                </Col>
                <Col></Col>

                <Col className="d-flex align-items-center justify-content-end h-100 row-cel">
                    <FontAwesomeIcon icon={faFlag} color="red"/>
                </Col>
                <Col></Col>
                <Col className="d-flex align-items-center justify-content-end h-100 row-cel">
                    <button className="btn btn-header-primary icon-button">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button></Col>
                <Col className="d-flex align-items-center justify-content-end h-100 row-cel">
                    <button className="btn btn-header-danger icon-button">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </Col>
                <Col className="d-flex align-items-center justify-content-end h-100 row-cel">
                    <button className="btn btn-header-success icon-button">
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                </Col>
            </Row>
        )
    }
}
