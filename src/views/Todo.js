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
    Col,
    Button
} from 'reactstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';
import TodoItem from '../components/TodoItem';

export default class Todo extends Component {
    state = {
        priorities: [
            { value: 'urgent', label: 'Urgent' },
            { value: 'normal', label: 'Normal' },
            { value: 'low', label: 'Low' }
        ],
        priority: ''

    }

    onSelectPriority = value => {
        this.setState({ priority: value.value })

    }

    render() {
        console.log('priority', this.state.priority)
        return (
            <Row className='todo-container d-flex justify-content-center'>
                <Col lg="6" xs="12" className='todo d-flex justify-content-center' >
                    <Card className='form-card'>
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
                                            placeholder="Priority..."
                                            onChange={this.onSelectPriority}
                                        />
                                    </Col>
                                </Row>
                            </FormGroup>
                        </CardBody>
                        <Button
                            className="btn-block"
                            color="success"
                            style={{ borderRadius: 0 }}
                        >
                            Add item
                        </Button>

                    </Card>

                </Col>
                <Col lg="8" xs="12" className="mt-4">
                    <Card className="todo-card" outline color="white">
                        <TodoItem />
                        <TodoItem />
                        <TodoItem />
                        <TodoItem />
                    </Card>
                </Col>
            </Row>
        )
    }
}
