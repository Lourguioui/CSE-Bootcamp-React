import React, { Component } from 'react';
import {
    Row,
    Col,
    Badge,
    Tooltip
} from 'reactstrap';
import '../assets/todo-item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faArrowRight, faFlag } from "@fortawesome/free-solid-svg-icons";

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
                isOpen : false
        }
    }
    toggle = () =>{
        this.setState(prevState => {
            return {isOpen : !prevState.isOpen}
        })
    }
    render() {

        return (
            <Row className="todo-item-row" >
                <Col lg="4" className="d-flex align-items-center h-100 row-cel pl-4">
                    <div>{this.props.task.Task}</div>
                </Col>
                <Col lg="4" className="d-flex align-items-center h-100 row-cel">
                    <div>{this.props.task.created_at}</div>
                </Col>
                <Col className="d-flex align-items-center justify-content-center h-100">
                    <Badge color={this.props.task.status==='pending'?'warning':this.props.task.status==='in-progress'?'primary':'success'} pill> {this.props.task.status} </Badge>
                </Col>
                <Col></Col>

                <Col className="d-flex align-items-center justify-content-end h-100 row-cel">
                    <FontAwesomeIcon icon={faFlag} id="PriorityFlag" color={this.props.task.priority==='normal' ? 'yellowgreen' : this.props.task.priority==='low'?'grey':'red'} />
                    <Tooltip placement="top" isOpen={this.state.isOpen}  target="PriorityFlag"  toggle={this.toggle} >
                        {this.props.task.priority}
                    </Tooltip>
                </Col>
                <Col></Col>
                <Col className="d-flex align-items-center justify-content-end h-100 row-cel">
                    <button className="btn btn-header-primary icon-button">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button></Col>
                <Col className="d-flex align-items-center justify-content-end h-100 row-cel">
                    <button className="btn btn-header-danger icon-button" onClick={this.props.onDelete}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </Col>
                <Col className="d-flex align-items-center justify-content-end h-100 row-cel">
                    <button className="btn btn-header-success icon-button" onClick={this.props.onDone}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                </Col>
            </Row>
        )
    }
}
