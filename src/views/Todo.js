import React, { Component } from 'react';
import '../assets/todo.css';
import {
    Card,
    CardBody,
    Input,
    CardTitle,
    Form,
    FormGroup,
    Label,
    Row,
    Col
} from 'reactstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';

export default class Todo extends Component {
    state = {
        priorities: [
            { value: 'Urgent', label: 'Urgent' },
            { value: 'Normal', label: 'Normal' },
            { value: 'Low', label: 'Low' }
        ]
    }
    render() {
        return (
            <Row className='todo-container d-flex justify-content-center'>
                <Col lg="6" xs="12" className='todo d-flex justify-content-center' >
                    <Card className='todo-card' outline color="white">
                        <CardTitle>To do list</CardTitle>
                        <CardBody>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <Input
                                            placeholder='Item'
                                        />
                                    </Col>
                                    <Col>
                                        <Select
                                            options={this.state.priorities}
                                        />
                                    </Col>
                                </Row>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}
